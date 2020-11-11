<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Link;

class ApiController extends Controller
{
    public function create(Request $request){
        $link = new Link();
        $link->url=$request->input('url');
        $link->clicks=$request->input('clicks');

        $link->save();
        return response()->json($link);
    }

    public function getAll()
    {
        $links = DB::table('links')                
        ->orderBy('clicks', 'desc')
        ->get();
        return response()->json($links);

    }


    public function click(Request $request){
        $links = new Link();
        $link = DB::table('links')->where('url', $request->input('url'))->first();     
        if ($link == ''){
        DB::table('links')->insert(
                ['url' => $request->input('url'),'clicks' =>1]
            );
        }
        else{
        DB::table('links')->where('url', $request->input('url'))->increment('clicks', 1);
         }
        $links = DB::table('links')->where('url', $request->input('url'))->first();     
        return response()->json($links);
    }
}
