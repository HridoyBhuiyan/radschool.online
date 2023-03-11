class appURL {

	static baseURL = 'https://admin.radschool.online/api/';
	static rootDomain = 'https://admin.radschool.online/';
	//
	// static baseURL = 'http://localhost:8000/api/';
	// static rootDomain = 'http://localhost:8000/';

	static sendContact = this.baseURL + 'contactForm';

	//All for SEO data receiving
	static getHomePageSEO = this.baseURL + 'radHomeSeo';
	static getAboutPageSEO = this.baseURL + 'radAboutSeo';
	static getSchedulePageSEO = this.baseURL + 'radScheduleSeo';
	static getContactPageSEO = this.baseURL + 'radContactSeo';
	static getPolicyPageSEO = this.baseURL + 'radPolicySeo';
	static getTrainingPageSEO = this.baseURL + 'radTrainingSeo';
	static getCoursePageSEO = this.baseURL + 'radCourseSeo';
	static getCourseDetails = this.baseURL + 'radCourse/';
	static getContactPageData = this.baseURL + 'contactPage';
	static getAboutPageData = this.baseURL + 'radAbout';
	static getAboutPageDataUser = this.baseURL + 'radUserAbout';
	static getEachCourseData = this.baseURL + 'radCourse';

	static getEachCourseSingle = this.baseURL + 'radSingleCourse';
	static getEventData = this.baseURL + 'radEvent';
	static getEventBanner = this.baseURL + 'radHomeEventBanner';
	static getDiscountBanner = this.baseURL + 'radDiscountBanner';
	static getHomeTopBanner = this.baseURL + 'radHomeTopBanner';
	static getVideoBanner = this.baseURL + 'radVideoBanner';

	static getFooterAddress = this.baseURL + 'radFooterAddress';
	static getFooterEmail = this.baseURL + 'radFooterEmail';
	static getFooterPhone = this.baseURL + 'radFooterPhone';
	static getPolicyBanner = this.baseURL + 'radPrivacyBanner';

	static getLogo = this.baseURL + 'logo';
	static getScheduleData = this.baseURL + 'radSchedule';

	static postSubscriberData = this.baseURL + 'radSubscriber';
	static postScheduleSet = this.baseURL + 'radAppllication';
	static getSubBanner = this.baseURL + 'subBanner';
	static getFaq = this.baseURL + 'faqData';
}
export default appURL;
