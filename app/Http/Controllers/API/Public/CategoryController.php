<?php
namespace App\Http\Controllers\API\Public;

use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    // Get all categories
    public function index(Request $request,)
    {
        $token = $request->header('X-Token');
        
        if ($token !== '1234') {
            return response()->json(null, 307)->header('Location', '/');
        }
        return Category::all();
    }
}
