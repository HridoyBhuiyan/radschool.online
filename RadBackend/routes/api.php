<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\FaqController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\seoController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\bannerController;
use App\Http\Controllers\eventController;
use App\Http\Controllers\scheduleController;
use App\Http\Controllers\newsLetterController;
use App\Http\Controllers\trainingController;
use App\Http\Controllers\applicationController;
use App\Http\Controllers\contactPageController;

Route::post("/contactForm",[ContactFormController::class,"getContactMessege"]);
Route::get("/contactPage",[contactPageController::class,"getContactPageData"]);

//All SEO related API ROUTE Start
Route::get('/radSeo', [seoController::class, 'setSeoData']);
Route::get('/radHomeSeo',[seoController::class,'setHomeSeoData']);
Route::get('/radAboutSeo',[seoController::class,'setAboutSeoData']);
Route::get('/radScheduleSeo',[seoController::class,'setScheduleSeoData']);
Route::get('/radContactSeo',[seoController::class,'setContactSeoData']);
Route::get('/radPolicySeo',[seoController::class,'setPolicySeoData']);
Route::get('/radTrainingSeo',[seoController::class,'setTrainingSeoData']);
Route::get('/radCourseSeo',[seoController::class,'setCourseSeoData']);

//All CoursePage Related Data
Route::get('/radCourse',[CourseController::class, "getCourseData"]);
Route::get('/radCourse/{category}',[CourseController::class, "getCourseDataByCategory"]);
Route::get("/radSingleCourse/{courseID}", [CourseController::class, "getSingleCourse"]);

//All banner related data
Route::get('/radBanner',[bannerController::class, "getBannerDetails"]);
Route::get('/radHomeTopBanner',[bannerController::class, "getHomeTopBanner"]);
Route::get('/radHomeEventBanner',[bannerController::class, "getHomeEventBanner"]);
Route::get('/radDiscountBanner',[bannerController::class, "getDiscountBanner"]);
Route::get('/radVideoBanner',[bannerController::class, "getVideoBanner"]);
Route::get('/radPrivacyBanner',[bannerController::class, "getPrivacyBanner"]);

Route::get('/radFooterAddress',[bannerController::class, "getFooterAddress"]);
Route::get('/radFooterEmail',[bannerController::class, "getFooterEmail"]);
Route::get('/radFooterPhone',[bannerController::class, "getFooterPhone"]);

//All event related data

Route::get("/radEvent",[eventController::class, "getEventData"]);
Route::get("/radEvent/{id}",[eventController::class, "getSingleEvent"]);

//all about page data
Route::get("/radAbout",[AboutController::class, "getAboutData"]);
Route::get("/radUserAbout",[AboutController::class, "getUserAboutData"]);
Route::get("/radUserAbout/{id}",[AboutController::class, "getUserAboutDataByID"]);

//all schedule data
Route::get("/radSchedule",[scheduleController::class,"getSheduleData"]);
Route::get("/radSchedule/{id}",[scheduleController::class,"getSingleSheduleData"]);


// get subscriber details
Route::post('/radSubscriber',[newsLetterController::class,"getSubscriber"]);


Route::get('/allFaq', [FaqController::class,"getFaq"]);


//post appllication data
Route::post("/radAppllication",[applicationController::class,"getApplication"]);

//get Logo data
Route::get("/subBanner",[newsLetterController::class,"getNewsLetterBanner"]);
Route::get("/faqData",[FaqController::class,"getFaqData"]);
