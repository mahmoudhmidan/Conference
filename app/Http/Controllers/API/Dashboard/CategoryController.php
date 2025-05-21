<?php

namespace App\Http\Controllers\API\Dashboard;

use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    // Get all categories
    public function index(Request $request,)
    {
        $categories = Category::all();
        return view('categories.index')->with('categories', $categories); 
    }
    // Get a single category
    public function show($id)
    {
        return Category::findOrFail($id);
    }

    // Create a new category
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->save();
        return redirect()->route('categories.index')->with('success', 'Category created successfully.');
    }

    // Method to show the edit form
    public function edit(Category $category)
    {
        return view('categories.edit', compact('category'));
    }

    // Update an existing category
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $category = Category::findOrFail($id);
        $category->update($request->all());
        return redirect()->route('categories.index')->with('success', 'Category updated successfully.');
       
    }

    // Delete a category
    public function destroy(Request $request)
    {
        $category = Category::findOrFail($request->id);
        $category->delete();
        return redirect()->route('categories.index')->with('success', 'Category deleted successfully.');
    }
}
