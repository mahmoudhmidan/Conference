<?php

namespace App\Http\Controllers\API\Dashboard;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Machine;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
class MachineController extends Controller
{

    public function all(Request $request,)
    {
        $token = $request->header('X-Token');
        
        if ($token !== '1234') {
            return response()->json(null, 307)->header('Location', '/');
        }
        return Machine::all();
    }
    public function index(Request $request,)
    {
        $machines = Machine::with('category')->get();
        return view('machines.index')->with('machines', $machines); 
    }
    public function show($id)
    {
        return Machine::findOrFail($id);
    }
    public function create()
    {
        $categories = Category::all();
        return view('machines.create')->with('categories', $categories); 
    }
    public function store(Request $request)
{
    $validator = Validator::make($request->all(),[
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'features' => 'nullable|string',
        'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:200',
        'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:300',
        'category_id' => 'required|exists:categories,id',
    ],[
        'thumbnail.max' => 'The thumbnail image size must not exceed 200KB.',
        'images.*.max' => 'Each image size must not exceed 300KB.',
    ]);
    if ($validator->fails()) {
        return redirect()->route('machines.index')
            ->withErrors($validator)
            ->withInput()
            ->with('warning', 'One or more images exceed the size limit of 200KB.');
    }
    // Create new machine (save initially to get the ID)
    $machine = new Machine();
    $machine->title = $request->title;
    $machine->description = $request->description;
    $machine->features = $request->features;
    $machine->category_id = $request->category_id;
    $machine->save();

    // Generate a unique identifier for the machine
    $machineId = $machine->id;

    // Handle thumbnail upload with machine-specific naming
    $thumbnail = $request->file('thumbnail');
    $thumbnailName = 'machine_' . $machineId . '_thumbnail.' . $thumbnail->getClientOriginalExtension();
    $thumbnailPath = $thumbnail->storeAs('images/thumbnails', $thumbnailName, 'public');

    // Handle multiple images upload with machine-specific naming
    $imagePaths = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $index => $image) {
            $imageName = 'machine_' . $machineId . '_image_' . $index . '.' . $image->getClientOriginalExtension();
            $imagePaths[] = $image->storeAs('images/machines', $imageName, 'public');
        }
    }

    // Update machine with file paths
    $machine->thumbnail = $thumbnailPath;
    $machine->images = json_encode($imagePaths);
    $machine->save();

    return redirect()->route('machines.index')->with('success', 'Machine created successfully.');
}

    public function edit(Machine $machine)
    {
        $categories = Category::all();
        return view('machines.edit',compact('machine', 'categories')); 
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'features' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:200',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:300',
            'category_id' => 'nullable|exists:categories,id',
        ], [
            'thumbnail.max' => 'The thumbnail image size must not exceed 200KB.',
            'images.*.max' => 'Each image size must not exceed 300KB.',
        ]);
    
        if ($validator->fails()) {
            return redirect()->route('machines.index')
                ->withErrors($validator)
                ->withInput()
                ->with('warning', 'One or more images exceed the size limit.');
        }
        // Find the machine by ID
        $machine = Machine::findOrFail($id);
    
        // Update other attributes only if provided
        if ($request->filled('title')) {
            $machine->title = $request->title;
        }
    
        if ($request->filled('description')) {
            $machine->description = $request->description;
        }
        if ($request->filled('features')) {
            $machine->features = $request->features;
        }
        if ($request->filled('category_id')) {
            $machine->category_id = $request->category_id;
        }
    
        // Handle thumbnail update if provided
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail if exists
            if ($machine->thumbnail) {
                Storage::disk('public')->delete($machine->thumbnail);
            }
    
            // Save new thumbnail with machine-specific naming
            $thumbnail = $request->file('thumbnail');
            $thumbnailName = 'machine_' . $machine->id . '_thumbnail.' . $thumbnail->getClientOriginalExtension();
            $thumbnailPath = $thumbnail->storeAs('images/thumbnails', $thumbnailName, 'public');
            $machine->thumbnail = $thumbnailPath;
        }
    
        // Handle multiple images update if provided
        if ($request->hasFile('images')) {
            // Delete old images if exists
            $oldImages = json_decode($machine->images, true);
            if ($oldImages) {
                foreach ($oldImages as $oldImage) {
                    Storage::disk('public')->delete($oldImage);
                }
            }
    
            // Save new images with machine-specific naming
            $imagePaths = [];
            foreach ($request->file('images') as $index => $image) {
                $imageName = 'machine_' . $machine->id . '_image_' . $index . '.' . $image->getClientOriginalExtension();
                $imagePaths[] = $image->storeAs('images/machines', $imageName, 'public');
            }
            $machine->images = json_encode($imagePaths);
        }
    
        $machine->save();
    
        return redirect()->route('machines.index')->with('success', 'Machine updated successfully.');
    }


public function destroy($id)
{
    $machine = Machine::findOrFail($id);

    // Delete the thumbnail
    if ($machine->thumbnail) {
        Storage::disk('public')->delete($machine->thumbnail);
    }

    // Delete the images
    $images = json_decode($machine->images, true);
    if ($images) {
        foreach ($images as $image) {
            Storage::disk('public')->delete($image);
        }
    }

    // Delete the machine
    $machine->delete();

    return redirect()->route('machines.index')->with('success', 'Machine deleted successfully.');
}
}
