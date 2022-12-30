<?php

use App\Http\Controllers\allBannerController;
use App\Http\Controllers\applicationController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\contactPageController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\eventController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\imageController;
use App\Http\Controllers\LoginRegistrationController;
use App\Http\Controllers\newsLetterController;
use App\Http\Controllers\OtherPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\seoController;
use App\Http\Controllers\SummeryController;
use App\Models\courseModel;
use Illuminate\Support\Facades\Route;

Route::get('/', function (){
    return view('index');
});

//Route::get('{AnyRoute}', function () {
//    return view('index');
//})->where('{AnyRoute}','.*');



Route::get("/totalSubscriber",[SummeryController::class,"totalSummery"])->middleware('auth');
Route::get("/topToolBar",[SummeryController::class,"getToolbarSummery"])->middleware('auth');

//all login route
Route::post('/login', [LoginRegistrationController::class,'Login']);
Route::post('/makeUser',[LoginRegistrationController::class, "getRegistration"])->middleware('auth');
Route::get('/logout',[LoginRegistrationController::class,'Logout'])->middleware('auth');
Route::post('/passwordChange',[LoginRegistrationController::class,'setPasswordChange'])->middleware('auth');
Route::get('/allUser',[LoginRegistrationController::class,"allUser"])->middleware('auth');

//all Schedule Route
Route::post("/ScheduleUpdate",[scheduleController::class,"updateSchedule"])->middleware('auth');
Route::post("/scheduleDelete",[scheduleController::class,"deleteSchedule"])->middleware('auth');
Route::post("/scheduleInsert",[scheduleController::class,"insertSchedule"])->middleware('auth');
Route::get("/allApplication",[applicationController::class,"getApplicationData"])->middleware('auth');


//Application Route
Route::post("/updateNote",[applicationController::class,"setNote"]);
Route::post("/deleteApplication",[applicationController::class,"deleteApplication"])->middleware('auth');
Route::post("/watchedApplication",[applicationController::class,"watchedApplication"])->middleware('auth');

//Contact Form Route
Route::get("/getContactMessage",[ContactFormController::class,"getAllContactMessgage"])->middleware('auth');
Route::post("/deleteContactMessage",[ContactFormController::class,"deleteContactMessage"])->middleware('auth');
Route::post("/addContactNote",[ContactFormController::class,"getContactNote"])->middleware('auth');
Route::post("/watchedMessege",[ContactFormController::class,"setWatched"])->middleware('auth');

//SEO related Route
Route::post("/updateSEO",[seoController::class,"upDateSEO"])->middleware('auth');


//Image related Route
Route::get("/allMediaImage",[imageController::class,"getAllImage"]);
Route::post("/photoPost",[imageController::class, "photoPost"])->middleware('auth');
Route::post("/photoDelete",[imageController::class, "deletePhoto"])->middleware('auth');


//Course Related Route
Route::post("/addNewCourse", [CourseController::class, "getNewCourse"])->middleware('auth');

Route::post("/deleteCourses", [CourseController::class, "deleteCourse"])->middleware('auth');
Route::post("/updateCourse", [CourseController::class, "getUpdateCourse"])->middleware('auth');


//contact us Page Route
Route::Post("/updateContact", [contactPageController::class, "contactUpdate"])->middleware('auth');
Route::get("/companyAboutData", [contactPageController::class,"companyAbout"])->middleware("auth");
Route::post("/updateCompanyAboutData", [contactPageController::class,"updateRadAbout"])->middleware("auth");


//all Banner Route
Route::Post("/updateHomeTop", [allBannerController::class,"updateHomeTop"])->middleware('auth');
Route::Post("/updateVideoSection", [allBannerController::class,"updateVideoSection"])->middleware('auth');
Route::Post("/updatePrivacySection", [allBannerController::class,"updatePrivacySection"])->middleware('auth');
Route::Post("/updateNewsletter", [allBannerController::class,"updateNewsletter"])->middleware('auth');
Route::Post("/updateFooterAddress", [allBannerController::class,"updateFooterAddress"])->middleware('auth');
Route::Post("/updateFooterEmail", [allBannerController::class,"updateFooterEmail"])->middleware('auth');
Route::Post("/updateFooterPhone", [allBannerController::class,"updateFooterPhone"])->middleware('auth');

//event data route
Route::Post("/eventDataAdd",[eventController::class, "addEventData"])->middleware('auth');
Route::Post("/eventDataUpdate",[eventController::class, "updateEventData"])->middleware('auth');
Route::Post("/eventDataDelete",[eventController::class, "deleteEventData"])->middleware('auth');

//Subscriber data route
Route::get('/allSubscriber', [newsLetterController::class, "allSubscriber"])->middleware('auth');

//profile page data
Route::get('getMyProfile',[ProfileController::class,"getMyProfile"])->middleware('auth');
Route::get('getUserInfo',[ProfileController::class,"getUserInfo"])->middleware('auth');
Route::post('updateProfileData',[ProfileController::class,"updateProfileData"])->middleware('auth');
Route::post('updateProfileEachData',[ProfileController::class,"updateProfileEachData"])->middleware('auth');



//FaQ related Api
Route::post('/insertFaq', [FaqController::class,"insertFaq"])->middleware('auth');
Route::get('/allFaq', [FaqController::class,"getFaq"])->middleware('auth');
Route::post('/deleteFaq', [FaqController::class,"deleteFaq"])->middleware('auth');
Route::post('/updateFaq', [FaqController::class,"updateFaq"])->middleware('auth');

Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});
