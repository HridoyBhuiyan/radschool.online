-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 11:34 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `radschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `facebook_link` varchar(255) NOT NULL,
  `twitter_link` varchar(255) NOT NULL,
  `reddit_link` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `name`, `designation`, `details`, `avatar`, `facebook_link`, `twitter_link`, `reddit_link`, `updated_at`) VALUES
(1, '-Our Mission-', 'To provide the most actionable app store data', '<p>hello To provi<strong>de the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app </strong>store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data</p><p><br></p><p><br></p><p> To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide t he most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data</p>', '', 'To provide the most actionable app store data', 'To provide the most actionable app store data', 'To provide the most actionable app store data', '2022-07-16 10:07:10'),
(7, 'xyz', 'xyz', 'xyz', 'storage/public/IXlbkMVI7QjNbU8Rck2IFzGw1hL9CV9hwP2eVVfI.jpg', 'xyz', 'xyz', 'xyz', '1658062781'),
(8, 'Abid', 'Modarator', 'To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide the most actionable app store data To provide t he most actionable app store data To provide the most actionable app store', 'storage/public/STU3HMv6YtIzeK6FDaof2MPwVTIlz8KL11U95gV5.webp', '/', '/', '/', '1659907760');

-- --------------------------------------------------------

--
-- Table structure for table `all_banner`
--

CREATE TABLE `all_banner` (
  `id` int(11) NOT NULL,
  `banner_name` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `details` text NOT NULL,
  `background_image` varchar(255) NOT NULL,
  `additional_url` text NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `all_banner`
--

INSERT INTO `all_banner` (`id`, `banner_name`, `title`, `details`, `background_image`, `additional_url`, `updated_at`) VALUES
(1, 'home top', 'test The Next World Changing Breakthrough Could Come from you.', 'Enhance learning opportunities and get ready for the dynamic business world.', 'storage/public/i7aZjCLtp6Pmw2jmjjsbxPDaUxTKN5Aa7GquUdga.webp', '/courses', '2022-08-03 11:54:48'),
(2, 'event banner', 'International Business and Leadership Summit and Woman of Stature Global Awards and HGBIL Awards 2022', '12 - 13 May 2022 - Dubai', 'images/motivationalspeaker.webp', '/events/16', '2022-08-12 07:59:22'),
(3, 'discount banner', 'Use a special Web Discount! Preorder your Ticket Now!', 'Get your ticket right now and at a special discounted price', 'SomeDay', '/about', '2022-07-03 20:45:45'),
(4, 'video banner', 'Innovative Approach for Education', 'Our faculty competence, ability to transmit and facilitate knowledge through innovative teaching and outcome-based education, challenge our learners to think out-of-the-box. Learners are able to engage in active learning, harness concepts and principles, translate ideas, make sound decisions and apply them in real-life situations.', 'SomeDay', 'https://www.youtube.com/watch?v=0i4z5tqRzPg', '2022-06-30 11:45:30'),
(5, 'privacy banner', 'Privacy and policy', 'Data is critical for businesses that process that information to provide services and products to their customers. From a corporate context, in a company - from the top executive level right down to the operational level - just about everyone relies heavily on information.In a complex environment where so much depends on the data that businesses collect and process, protecting that information becomes increasingly important. Among the steps business owners take to protect the data of their users, drafting a clear and concise Privacy Policy agreement holds central importance.In this article, we will discuss the elements of a Privacy Policy to help you better understand the constructs of an effective Privacy Policy agreement that instills faith and trust in your customers and protects you from a number of liability issues.In this article, we will discuss the elements of a Privacy Policy to help you better understand the constructs of an effective Privacy Policy agreement that instills faith and trust in your customers and protects you from a number of liability issues. In this article, we will discuss the elements of a Privacy Policy to help you better understand the constructs of an effective Privacy Policy agreement that instills faith and trust in your customers and protects you from a number of liability issues.', 'SomeDay', '', '2022-06-30 11:45:18'),
(6, 'newsletter', 'Get newsletter from us...', 'Now you can take our regular update. It will help you to take information about our current course and future plan. Give us your email address. We will notify you soon about the next plan. We can assure you that your email will stay safe to us.', 'SomeDay', '', '2022-06-30 11:45:11'),
(7, 'address info', 'address info', '41/1, block - c, Mohammadpur, Dhaka 1207, Bangladesh', 'SomeDay', '', '2022-08-03 19:48:59'),
(8, 'email info', 'email infoo', 'FirnasData@gmail.com', 'SomeDay', '', '2022-08-04 08:03:29'),
(9, 'phone info', 'phone info', '+88018334554677', 'SomeDay', '', '2022-08-03 19:48:40');

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject_name` varchar(255) NOT NULL,
  `course_id` varchar(255) NOT NULL,
  `cover_letter` text NOT NULL,
  `date` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `watched` varchar(255) NOT NULL,
  `take_note` text NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`id`, `first_name`, `last_name`, `email`, `subject_name`, `course_id`, `cover_letter`, `date`, `location`, `watched`, `take_note`, `updated_at`) VALUES
(1, 'hridoy', 'bhuiyan', 'email', 'courseName', 'courseId', 'coverLetter', '09-06-22', 'United States', '1', 'hello', '2022-08-06 13:34:05'),
(4, 'Hridoy', 'Bhuiyan', 'sdfiojjsdf;j', 'sado', '12', 'A lot of thing', 'today', 'nothing', '0', 'Empty Note!', '2022-07-10 02:57:17'),
(5, 'super', 'Bhuiyan', 'sdfiojjsdf;j', 'sado', '12', 'A lot of thing', 'today', 'nothing', '0', 'Make a note', '2022-07-10 02:57:20'),
(6, 'Hridoy', 'Bhuiyan', 'hellohridoy007@gmail.com', 'Physic and Science', '101', ',,nkjnhih hiuh', '21-06-22', 'json_encode()', '0', '<button>Take Note </button>', '2022-07-10 02:57:18'),
(8, 'bird', 'Bhuiyan', 'hellohridoy007@gmail.com', 'Physic and Science', '101', ',,nkjnhih hiuh', '21-06-22', 'United States', '1', 'Empty Note!', '2022-07-16 08:53:06'),
(9, 'Hridoy', 'Bhuiyan', 'hellohridoy007@gmail.com', 'Physic and Science', '101', ',,nkjnhih hiuh', '21-06-22', 'United States', '0', 'I will see it later', '2022-07-10 02:56:48'),
(11, 'Hridoy', 'Bhuiyan', 'hellohridoy007@gmail.com', 'new', '9', 'ff', '21-06-22', 'United States', '0', 'h', '2022-07-03 20:55:05'),
(12, 'Hridoy', 'Bhuiyan', 'moonworkerboy@gmail.com', 'Math', '401', '$countryName', '10-07-22', 'egypt', '0', 'Empty Note!', '2022-07-10 02:58:08'),
(13, 'Hridoy', 'Bhuiyan', 'moonworkerboy@gmail.com', 'Math', '401', 'A great cover letter should convey enthusiasm for the role, demonstrate your employer knowledge, and provide details that supplement the information a hiring manager will find on your resume. Crafting a well-written cover letter can help you stand out from the competition, making it a critical piece of the job search. Our cover letter examples help with your job application can convince employers that you’re the right person for the job.', '10-07-22', 'egypt', '0', 'Empty Note!', '2022-07-10 02:57:24'),
(14, 'Nooruddin', 'Bhuiyan', 'moonworkerboy@gmail.com', 'Math', '401', 'A great cover letter should convey enthusiasm for the role, demonstrate your employer knowledge, and provide details that supplement the information a hiring manager will find on your resume. Crafting a well-written cover letter can help you stand out from the competition, making it a critical piece of the job search. Our cover letter examples help with your job application can convince employers that you’re the right person for the job.', '10-07-22', 'egypt', '1', 'I will take action later', '2022-07-16 08:53:38'),
(15, 'Hridoy', 'Bhuiyan', 'hellohridoy007@gmail.com', 'Arabic', '702', 'iuhihiuhiouhiuh', '16-07-22', 'egypt', '1', 'Empty Note!', '2022-07-17 12:49:02'),
(16, 'Hridoy', 'Bhuiyan', 'hellohridoy007@gmail.com', 'Programming', '101', 'lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm lorem ipusm', '17-07-22', 'egypt', '1', 'I dont want him in this course', '2022-07-17 12:49:34'),
(17, 'Nooruddin', 'Food', 'hellohridoy007@gmail.com', 'English language', '101', 'jiojo', '25-07-22', 'egypt', '1', 'Empty Note!', '2022-08-09 22:51:17');

-- --------------------------------------------------------

--
-- Table structure for table `app_seo`
--

CREATE TABLE `app_seo` (
  `id` int(11) NOT NULL,
  `page_name` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `seo_title` text NOT NULL,
  `seo_description` text NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `app_seo`
--

INSERT INTO `app_seo` (`id`, `page_name`, `title`, `description`, `seo_title`, `seo_description`, `updated_at`) VALUES
(1, 'Home Page', 'Main Page', 'Rad School is a online learning platform', 'RadSchool | HomePage', 'Rad School is a online learning platform', '2022-07-03 20:26:23'),
(2, 'About Page', 'About Page', 'About Page | Rad School is a online learning platform', 'About Page | Rad School is a online learning platform', 'About Page | Rad School is a online learning platform', ''),
(3, 'Schedule Page', 'Schedule Page', 'Schedule Page | Online coaching website', 'Schedule Page', 'Schedule Page of an online coaching system', ''),
(4, 'Contact Page', 'Contact Page', 'Contact Page | from radschool', 'Contact Page', 'Contact Page from rad school', ''),
(5, 'Policy Page', 'Policy Page', 'Policy Page of rad school', 'Policy Page', 'Policy Page | of radschool', ''),
(6, 'Training Page', 'Training Page | rad school', 'Training Page | rad school', 'Training Page | rad school', 'Training Page | rad school', ''),
(7, 'Course Page', 'Course Page', 'Course Page', 'Course Page', 'Course Page', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact_form`
--

CREATE TABLE `contact_form` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `messege` text NOT NULL,
  `visit_time` varchar(255) NOT NULL,
  `send_date` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `watched` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_form`
--

INSERT INTO `contact_form` (`id`, `name`, `email`, `messege`, `visit_time`, `send_date`, `updated_at`, `note`, `watched`) VALUES
(20, 'noor', 'hellohridoy007@gmail.com', 'hiuhiuh', '05:26:37pm', '08-06-22', '', '', 0),
(21, 'Hridoy Bhuiyan', 'moonworkerboy@gmail.com', 'joijoij', '05:27:35pm', '08-06-22', '', '', 0),
(22, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'jiojoij', '07:47:07pm', '12-06-22', '', '', 0),
(23, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'hh', '07:49:23pm', '12-06-22', '', '', 0),
(24, 'Hridoy Bhuiyan', 'hellohridoy007gmail.com', 'iojoj', '07:49:41pm', '12-06-22', '', '', 0),
(25, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'kko', '07:58:25pm', '12-06-22', '', '', 0),
(26, 'Hridoy Bhuiyan', 'firnasdata@gmail.com', 'kpok', '07:59:51pm', '12-06-22', '2022-06-22 07:30:15', 'nothing', 0),
(27, 'Hridoy Bhuiyan', 'firnasdata@gmail.com', 'kpok', '07:59:59pm', '12-06-22', '2022-06-22 07:30:21', 'nothing', 0),
(29, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'er', '08:13:47pm', '12-06-22', '2022-06-22 07:30:26', 'nothing', 0),
(30, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'uhj', '08:13:58pm', '12-06-22', '2022-07-04 10:50:06', '', 1),
(31, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'ggbvjhb', '08:14:25pm', '12-06-22', '2022-06-30 10:57:14', 'Think about it later', 1),
(32, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'k', '08:15:47pm', '12-06-22', '2022-06-29 13:55:53', '', 1),
(33, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'jj', '08:17:29pm', '12-06-22', '2022-06-29 13:55:37', '', 1),
(36, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'j', '08:23:27pm', '12-06-22', '2022-06-25 08:59:20', 'Take my note', 1),
(41, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'hh', '04:07:43pm', '16-07-22', ' ', ' ', 0),
(42, 'Hridoy Bhuiyan', 'hellohridoy007@gmail.com', 'hiuhi', '04:16:57pm', '16-07-22', ' ', ' ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contact_page`
--

CREATE TABLE `contact_page` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `line_1` varchar(255) NOT NULL,
  `line_2` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_page`
--

INSERT INTO `contact_page` (`id`, `title`, `line_1`, `line_2`, `updated_at`) VALUES
(1, 'Official numberrr', '018234328653', '+001823432865388', '1659645050'),
(2, 'Official number', '018234328653', '+0018234328653', '1659603978'),
(3, 'Head Office', 'hello 1', '+0018234328653', '1659600282'),
(4, 'Office Address', '018234328653', 'helloooo', '1659645035');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_id` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `detail` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `course_start` varchar(255) NOT NULL,
  `course_end` varchar(255) NOT NULL,
  `course_duration` varchar(255) NOT NULL,
  `course_teacher` varchar(255) NOT NULL,
  `prerequisites` text NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `course_name`, `course_id`, `description`, `detail`, `location`, `price`, `image`, `course_start`, `course_end`, `course_duration`, `course_teacher`, `prerequisites`, `updated_at`) VALUES
(25, 'lorem ipsum dollar sit lorem ipsum dollar sit ', 'oijh', 'lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit ', '<p>jjj</p>', 'oijj', 'oijj', 'storage/public/rBYMqVwha0q2oE5eSqByDHp7G4XCNbXwUM03K2Ag.png', '2022-08-03', '2022-08-11', 'ooij', 'oij', 'o;jj', '1659789667'),
(26, 'new course', 'new course', 'new course', '<p>new course</p>', 'new course', 'new course', 'storage/public/ecjAxlHNGZPBoqybwaa034x2Jjto4cJnqYwGzM4m.webp', '2022-08-08', '2022-08-15', 'new course', 'new course', 'new course', '1660463126');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `speaker` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `outcome` text NOT NULL,
  `join_link` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `image`, `topic`, `month`, `day`, `title`, `speaker`, `detail`, `outcome`, `join_link`, `updated_at`) VALUES
(11, 'storage/public/VzStMzkgcIqVguyHjRDr4v2kpJStCCuFzZCsBfhy.webp', 'Another Topic', 'joiijoijoj', '5', 'first', 'Mohammad Ali', '<p>ojojolj</p>', 'lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit', 'contact/', '2022-07-17 11:46:28'),
(13, 'storage/public/vGtlmapw2z4MyOjR1W4IHWNe3LbhMEep4ADQ79Yq.jpg', 'Another Topic', 'Mar', '23', '5 Work-life Balance Empowering Womens Dayo', 'Mohammad Ali', '<p>Women\'s empowerment has become a significant topic of discussion in development and economics. Economic empowerment allows women to control and benefit from resources, assets, and income. It also aids the ability to manage risk and improve women\'s well-being.[4] It can result in approaches to support trivialized genders in a particular political or social context.[5] While often interchangeably used, the more comprehensive concept of gender empowerment concerns people of any gender, stressing the distinction between biological and gender as a role. Women empowerment helps in boosting the status of women through literacy, education, training and awareness creation.[6] Furthermore, women\'s empowerment refers to women\'s ability to make strategic life choices which had been previously denied them.[7]</p>', 'lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit', 'contact/', '2022-07-17 11:46:07'),
(14, 'storage/public/lwRWx6N0U04WfMnkUdcbhlift2o0PKuQIg3q6ikS.jpg', 'Another Topic', 'Mar', '23', '5 Work-life Balance Empowering Womens Day', 'Mohammad Ali', '<p>Women\'s empowerment has become a significant topic of discussion in development and economics. Economic empowerment allows women to control and benefit from resources, assets, and income. It also aids the ability to manage risk and improve women\'s well-being.[4] It can result in approaches to support trivialized genders in a particular political or social context.[5] While often interchangeably used, the more comprehensive concept of gender empowerment concerns people of any gender, stressing the distinction between biological and gender as a role. Women empowerment helps in boosting the status of women through literacy, education, training and awareness creation.[6] Furthermore, women\'s empowerment refers to women\'s ability to make strategic life choices which had been previously denied them.[7]</p>', 'lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit', 'contact/', '2022-07-17 11:43:51'),
(16, 'storage/public/ThyF5hlli93PFrudYZZ0ob9S5lXljTbtuEil4bZh.jpg', 'Another Topic', 'jojoij', '1', 'jijoij', 'Mohammad Ali', '<p>jiojoji</p>', 'lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit lorem ipsum dollar sit', 'contact/', '2022-07-17 11:38:27'),
(17, 'storage/public/tcUt00RyiTac6kQbsogIdtWsgacgVuNQ5LgmSAro.webp', 'jj', '0', '0', 'jjj  hriody', 'jj', '<p>jj</p><p>j</p><p>jj</p>', 'jj', 'jjj', '2022-08-03 11:59:02'),
(18, 'storage/public/Qx2FFY6Pc6H0RY3gvdvuUPoV0sO71s6LmNSluSDa.jpg', 'hhh', 'i', '1', 'kkkkk', '8', '<p>uh</p>', 'hridoy', 'https://www.fiverr.com/users/firnas_data/seller_dashboard', '2022-08-20 09:11:52'),
(19, 'storage/public/PVccc9sUCszC7Rkbx6On7KOAq9YJ2pi7imcAO1hm.jpg', 'yellow', 'yellow', '1', 'yellow', 'yellow', '<p>yellow&nbsp;</p>', 'yellow', '/', '1660986809');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image_path`, `title`) VALUES
(89, 'storage/public/vGtlmapw2z4MyOjR1W4IHWNe3LbhMEep4ADQ79Yq.jpg', 'Event Thumbnail'),
(90, 'storage/public/VzStMzkgcIqVguyHjRDr4v2kpJStCCuFzZCsBfhy.webp', 'Event Thumbnail'),
(91, 'storage/public/NqthEuQZkTsxqm0Zg3jCLSP7VEqGiXfTzHTaD0Nj.jpg', 'Event Thumbnail'),
(92, 'storage/public/l0g2wvkN4lWEP33UPKUlOIybglAAYMkIFymDmdUQ.jpg', 'name'),
(93, 'storage/public/NaWTNtk0meoodxUboPBAvXuL3KBaZwAPQnVAKZZ3.webp', 'From Course System'),
(94, 'storage/public/1ojKdWFfg6RSknZVUKeE4j5jX8oZcjO3pwAFA8Wz.jpg', 'From Course System'),
(95, 'storage/public/LAuBUjqA6lnVz0rqg7WFkXsWLaqsvJU13zKmR0Yt.jpg', 'From Course System'),
(96, 'storage/public/e23fjMOloUvdF7KpVqfanyPkAeYpqiQcI4nYq84P.webp', 'From Course System'),
(97, 'storage/public/W4qL8NMNCoZiObl52lFWbR7jWpS37RyFIJfssDI6.webp', 'From Course System'),
(98, 'storage/public/enqTcLI3I71XHhRIsERzhgYFvPXz1YoO737mjXcl.jpg', 'From Course System'),
(99, 'storage/public/9BXI6KRzeAgd0uwVv6imKoDOItHdxKvjRveWbLTd.jpg', 'From Course System'),
(100, 'storage/public/pItZLgbUgpX6YUZmCQDturCCU7srFHNyfP3K2onq.webp', 'From Course System'),
(101, 'storage/public/T2mEn0kHtXbcx5XPpggGA4qB6vXL1vbx7ymxSo0S.jpg', 'From Course System'),
(102, 'storage/public/zKH8Q7ApaVTuDHfGs6I70DJw8pa1EYKGs4XjYboI.webp', 'From Avatar'),
(103, 'storage/public/h9Au2g3yQOwsHyXvVZY9CZqQ8cxoxCZg1FL26F1r.jpg', 'From Avatar'),
(104, 'storage/public/DZU4oWZeloDwHzpDnCpNK9SuF5OaLG1btmI0LHfC.jpg', 'From Course System'),
(105, 'storage/public/IXlbkMVI7QjNbU8Rck2IFzGw1hL9CV9hwP2eVVfI.jpg', 'Admin avatar'),
(106, 'storage/public/OiwGOUeUORoHRDO9UIvLgrYpylsZeo78uRHTBnb5.jpg', 'From Avatar'),
(107, 'storage/public/i7aZjCLtp6Pmw2jmjjsbxPDaUxTKN5Aa7GquUdga.webp', 'From Home Top'),
(108, 'storage/public/tcUt00RyiTac6kQbsogIdtWsgacgVuNQ5LgmSAro.webp', 'Event Thumbnail'),
(109, 'storage/public/rBYMqVwha0q2oE5eSqByDHp7G4XCNbXwUM03K2Ag.png', 'From Course System'),
(110, 'storage/public/STU3HMv6YtIzeK6FDaof2MPwVTIlz8KL11U95gV5.webp', 'Admin avatar'),
(111, 'storage/public/ecjAxlHNGZPBoqybwaa034x2Jjto4cJnqYwGzM4m.webp', 'From Course System'),
(112, 'storage/public/Qx2FFY6Pc6H0RY3gvdvuUPoV0sO71s6LmNSluSDa.jpg', 'Event Thumbnail'),
(113, 'storage/public/PVccc9sUCszC7Rkbx6On7KOAq9YJ2pi7imcAO1hm.jpg', 'Event Thumbnail');

-- --------------------------------------------------------

--
-- Table structure for table `login_info`
--

CREATE TABLE `login_info` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_info`
--

INSERT INTO `login_info` (`id`, `user_name`, `password`, `updated_at`, `avatar`) VALUES
(1, 'hridoy', 'Hridoy', '1658058698', 'storage/public/zKH8Q7ApaVTuDHfGs6I70DJw8pa1EYKGs4XjYboI.webp'),
(5, 'hridoy4', 'Hridoy', '1656859687', 'storage/public/jUqlZPz0Q4KkxqUidxMdhk0uhactQgcYuCP6KMtS.jpg'),
(6, 'bappi', 'bappi', '1658058757', 'storage/public/h9Au2g3yQOwsHyXvVZY9CZqQ8cxoxCZg1FL26F1r.jpg'),
(7, 'hasan', 'hasan', '1658062832', 'storage/public/OiwGOUeUORoHRDO9UIvLgrYpylsZeo78uRHTBnb5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `subscriber`
--

CREATE TABLE `subscriber` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subscriber`
--

INSERT INTO `subscriber` (`id`, `email_id`) VALUES
(1, 'jijoi'),
(2, 'hellohridoy007@gmail.com'),
(3, 'hellohridoy007@gmail.com'),
(4, 'hellohridoy007@gmail.com'),
(5, 'moonworkerboy@gmail.com'),
(6, 'moonworkerboy@gmail.com'),
(7, 'xyz@gmail.com'),
(8, 'hellohridoy007@gmail.com'),
(9, 'moonworkerboy@gmail.com'),
(10, 'hellohridoy007@gmail.com'),
(11, 'hellohridoy007@gmail.com'),
(12, 'hellohridoy007@gmail.com'),
(13, 'hellohridoy007@gmail.com'),
(14, 'hellohridoy007@gmail.com'),
(15, 'hellohridoy007@gmail.com'),
(16, 'hellohridoy007@gmail.com'),
(17, 'moonworkerboy@gmail.com'),
(18, 'xyz@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `training`
--

INSERT INTO `training` (`id`, `title`, `course_name`, `details`, `image`) VALUES
(1, 'Lizard ', 'Lorem Ipsum dollar sit', 'Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sit', 'http://localhost:8000/images/blog.jpg'),
(2, 'Lizard ', 'Lorem Ipsum dollar sit', 'Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sit', 'http://localhost:8000/images/blog.jpg'),
(3, 'Lizard ', 'Lorem Ipsum dollar sit', 'Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sit', 'http://localhost:8000/images/blog.jpg'),
(4, 'Lizard ', 'Lorem Ipsum dollar sit', 'Lorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sitLorem Ipsum dollar sit', 'http://localhost:8000/images/blog.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_banner`
--
ALTER TABLE `all_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_seo`
--
ALTER TABLE `app_seo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_form`
--
ALTER TABLE `contact_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_page`
--
ALTER TABLE `contact_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_info`
--
ALTER TABLE `login_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `all_banner`
--
ALTER TABLE `all_banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `app_seo`
--
ALTER TABLE `app_seo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact_form`
--
ALTER TABLE `contact_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `contact_page`
--
ALTER TABLE `contact_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `login_info`
--
ALTER TABLE `login_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
