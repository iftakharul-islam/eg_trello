<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'fail',
                'validator_errors' => $validator->errors(),
            ]);
        }
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        
        $user = User::create($data);
        if($user){
            return response()->json([
                'status' => 'success',
                'message' => 'Registered Succesfully',
                'data' => $user,
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'message' => 'Registered failed, Something Went wrong',
        ]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'fail',
                'validator_errors' => $validator->errors(),
            ]);
        }

        if(Auth::attempt(['email'=> $request->email,'password' => $request->password])){
            $user = Auth::user();
            return response()->json([
                'status' => 'success',
                'login' => 'true',
                'user' => $user,
                'message' => 'Login Succesfully',
                'token' => $user->createToken('user_token')->accessToken,
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'message' => 'Login failed, Credentials Was wrong',
        ]);
    }
    public function userDetails()
    {
        
        $user = Auth::user();
        if($user){
            return response()->json([
                'status' => 'success',
                'user' => $user,
            ]);
        }
        return response()->json([
            'status' => 'failed',
            'message' => 'Login requireds, Credentials Was wrong',
        ]);
    }
}
