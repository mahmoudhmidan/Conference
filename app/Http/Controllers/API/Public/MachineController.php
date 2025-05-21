<?php

namespace App\Http\Controllers\API\Public;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Machine;
class MachineController extends Controller
{

  
    public function index(Request $request, $id)
    {
        $token = $request->header('X-Token');
        
        if ($token !== '1234') {
            return response()->json(null, 307)->header('Location', '/');
        }

        $machines = DB::table('machines')->where('category_id', $id)->get();

        return response()->json($machines, 200);
    }
    public function show($id)
    {
        return Machine::findOrFail($id);
    }
  
}
