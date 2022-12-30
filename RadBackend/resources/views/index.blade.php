<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RAD School | Admin Panel</title>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

        </head>
<body>
<div id="app"></div>
</body>

</html>
