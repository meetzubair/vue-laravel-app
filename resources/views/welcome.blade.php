<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        
    </head>
    <body>
        
        <div class="container">
            <h4>Laravel Vue</h4>
        </div>

        <div id="app">
           <example-component></example-component>
        </div>


    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
