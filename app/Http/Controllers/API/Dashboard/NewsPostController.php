<?php

namespace App\Http\Controllers\API\Dashboard;
use App\Models\NewsPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
class NewsPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newsPosts = NewsPost::all();
        return view('news.index', compact('newsPosts'));
    }
    public function create()
    {
        return view('news.create'); 
    }
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:200',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:300',
        ],[
            'thumbnail.max' => 'The thumbnail image size must not exceed 200KB.',
            'images.*.max' => 'Each image size must not exceed 300KB.',
        ]);
        if ($validator->fails()) {
            return redirect()->route('news.index')
                ->withErrors($validator)
                ->withInput()
                ->with('warning', 'One or more images exceed the size limit of 200KB.');
        }
        // Create new post (save initially to get the ID)
        $post = new NewsPost();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        // Generate a unique identifier for the post
        $postId = $post->id;

        // Handle thumbnail upload with post-specific naming
        $thumbnail = $request->file('thumbnail');
        $thumbnailName = 'post_' . $postId . '_thumbnail.' . $thumbnail->getClientOriginalExtension();
        $thumbnailPath = $thumbnail->storeAs('images/news/thumbnails', $thumbnailName, 'public');

        // Handle multiple images upload with post-specific naming
        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                $imageName = 'post_' . $postId . '_image_' . $index . '.' . $image->getClientOriginalExtension();
                $imagePaths[] = $image->storeAs('images/news/posts_images', $imageName, 'public');
            }
        }

        // Update post with file paths
        $post->thumbnail = $thumbnailPath;
        $post->images = json_encode($imagePaths);
        $post->save();

        return redirect()->route('news.index')->with('success', 'Post created successfully.');
    }
   

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsPost $post)
    {
        return view('news.edit',compact('post')); 
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:200',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:300',
        ],[
            'thumbnail.max' => 'The thumbnail image size must not exceed 200KB.',
            'images.*.max' => 'Each image size must not exceed 300KB.',
        ]);
        if ($validator->fails()) {
            return redirect()->route('news.index')
                ->withErrors($validator)
                ->withInput()
                ->with('warning', 'One or more images exceed the size limit of 200KB.');
        }
        $post = NewsPost::findOrFail($id);

        // Update other attributes only if provided
        if ($request->filled('title')) {
            $post->title = $request->title;
        }

        if ($request->filled('description')) {
            $post->description = $request->description;
        }

        // Handle thumbnail update if provided
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail if exists
            if ($post->thumbnail) {
                Storage::disk('public')->delete($post->thumbnail);
            }

            // Save new thumbnail with post-specific naming
            $thumbnail = $request->file('thumbnail');
            $thumbnailName = 'post_' . $post->id . '_thumbnail.' . $thumbnail->getClientOriginalExtension();
            $thumbnailPath = $thumbnail->storeAs('images/news/thumbnails', $thumbnailName, 'public');
            $post->thumbnail = $thumbnailPath;
        }

        // Handle multiple images update if provided
        if ($request->hasFile('images')) {
            // Delete old images if exists
            $oldImages = json_decode($post->images, true);
            if ($oldImages) {
                foreach ($oldImages as $oldImage) {
                    Storage::disk('public')->delete($oldImage);
                }
            }

            // Save new images with post-specific naming
            $imagePaths = [];
            foreach ($request->file('images') as $index => $image) {
                $imageName = 'post_' . $post->id . '_image_' . $index . '.' . $image->getClientOriginalExtension();
                $imagePaths[] = $image->storeAs('images/news/posts_images', $imageName, 'public');
            }
            $post->images = json_encode($imagePaths);
        }

        $post->save();

        return redirect()->route('news.index')->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $post = NewsPost::findOrFail($id);

        // Delete the thumbnail
        if ($post->thumbnail) {
            Storage::disk('public')->delete($post->thumbnail);
        }

        // Delete the images
        $images = json_decode($post->images, true);
        if ($images) {
            foreach ($images as $image) {
                Storage::disk('public')->delete($image);
            }
        }

        // Delete the post
        $post->delete();

        return redirect()->route('news.index')->with('success', 'Post deleted successfully.');
    }
}
