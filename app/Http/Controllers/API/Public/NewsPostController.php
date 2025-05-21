<?php

namespace App\Http\Controllers\API\Public;

use App\Models\NewsPost;
use Illuminate\Http\Request;

class NewsPostController extends Controller
{
    public function index(Request $request)
{
    $token = $request->header('X-Token');

    if ($token !== '1234') {
        return response()->json(null, 307)->header('Location', '/');
    }

    $request->validate([
        'offset' => 'required|integer',
        'limit' => 'integer'
    ]);

    $limit = $request->query('limit', 4);
    $offset = $request->query('offset');

    $newsPosts = NewsPost::skip($offset * $limit)
    ->take($limit)
    ->get();

    return response()->json($newsPosts);
}

}
