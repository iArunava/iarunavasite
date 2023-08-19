const expblock = document.getElementById("experienceblock");
const workblock = document.getElementById("workblock");
const talkblock = document.getElementById("talkblock");

experiences = [
'Software Engg, Aviso AI', 
//'Backend Engg, Aviso AI',
"Founding Engg #1, Ecocrumb (techstars '21)",
"Co-Founder, Attim",
"Research Intern, Microsoft Research",
"Computer Vision Intern, OpenCV",
//"Data Science Intern, Datamatica",
]

expduration = [
'Jan 2023 - Present',
//'Dec 2022 - Jan 2023',
'Nov 2021 - Nov 2022',
'Sep 2020 - Nov 2021',
'Jul 2019 - Aug 2019',
'Feb 2019 - Jul 2019',
//'May 2019 - Jul 2019',
//'Feb 2019 - March 2019',
]

expdesp = [
["Working on fixing existing production bugs and customer success. (github.com/arc-aviso)",
"Implemented feature to help client switch to our platform.",
"Worked on Mongodb pipelines and Elasticsearch upgrades.",
"Collaborated with different teams to move tickets to production.",
"Programmed multiple bash and python scripts for automation based on requirements."],

//["Worked towards updating the search infrastructure entirely to optimize and get to almost real-time chat indexing in the app using Telegram APIs.",
//"Worked with Python based asynchronous programming using asyncio/asyncpg."],

[
"First employee and helped build a usable product which helped acquire the first F500 paying customer.",
"Built the beta version of the Ecocrumb ESG Management software from scratch.",
"Worked on Frontend (Vue) and Backend (Django)",
"Complete infrastructure management for the software on AWS.",
"Scraped ESG standards data from websites, PDFs and Excel Sheets and built relationships out of it, and preparing and cleaning the data for use in the product.",
"Database management (Postgres).",
"End-to-End Automated Deployment Pipelines on Github Actions integrated with AWS Fargate.",
],
[
"We worked on about 4-5 ideas pivoting fast and working towards building a successful startup. Due to numerous reasons the ideas didnt work out. Few things i worked on:",
"Worked on the frontend(Vue) and backend(Flask) of our MLOps Platform ( Youtube )",
"Managed a team of 3 engineers who helped in getting us to the MVP stage of the MLOps Platform. Demo",
"Conceptualizing the workings of an AR Glass [Glass]",
"Built a robust edge detection algorithm without deep learning that would help the glass understand the world around. ( Youtube )",
"Built other CV Algorithms that are robust and uses traditional CV Algorithms, not Deep Learning. ( Youtube )",
"Worked on a real-time posture detection algorithm Real Time Posture Detection",
"Built a RaspberryPi powered device that can sit in the front of the car and analyze the surroundings in almost real-time. ( Demo) ( Thermal Camera Demo )",
"Worked towards a SaaS that analyzes statsical significance of the features of a dataset and returns in increasing order the list of features that effects a certain feature(KPI).",
"Scraped different kinds of website and PDFs using som basic tools as well as Selenium and tesseract, for data collection.",

],
[
"Worked on a paper which aims to do semi-supervised segmentation. We invented an algorithm that takes 5 paired images and learns how to perform proper segmentation with just 5 images and then applied that to the unseen data to do proper segmentation for all other images.",
"We even went far to do that with 1 paired image.",
"Pointer for the interested: https://arxiv.org/abs/2010.12622",
],
[
"Worked with the team in building articles that helps spread awareness and helps newbies getting into the field of computer vision get their feet wet.,",
"Link: https://learnopencv.com/pytorch-for-beginners-semantic-segmentation-using-torchvision/",
"Worked in creating content and code for course content for the 3 major courses that was released by OpenCV in the year 2021.",
"Worked on Projects focused on Segmentation",
"Reproduced a paper to solve a business problem by Semantic Segmentation.",
"Used EAST for text Detection on Articles.",
],
//[
//"Worked on Projects focused on Segmentation",
//"Reproduced a paper to solve a business problem by Semantic Segmentation.",
//"Used EAST for text Detection on Articles.",
//],
]

somework=[
"Flappy Dragon"
]
worklinks = [
"https://github.com/iarunava/flappydragon"
]
workcheck = [
["Play and share your high score! Check ", "http://flappydragon.attim.in/"],
]
workdesp = [
]

worksnap = [
"flappydragon_thumb2.png"
]

for (var i = 0; i < experiences.length; i++) {
   htmltoinsert="<h5 class='expname'><strong>" + experiences[i] + "</strong></h5>"
   htmltoinsert+="<strong><small class='text-muted'> " + expduration[i] + " </small></strong>"
   /*
   htmltoinsert+='<ul class="list-group">'
   for (var j=0; j < expdesp[i].length; j++) {
       htmltoinsert+="<li class='list-group-item'>" + expdesp[i][j] + "</li>"
   }
   htmltoinsert+='</ul>'
   */
   htmltoinsert+='<span class=""><p>'
   for (var j=0; j < expdesp[i].length; j++) {
       htmltoinsert+= "· " + expdesp[i][j] + "</br>"
   }
   htmltoinsert+='</p></span>'
   expblock.innerHTML +=htmltoinsert
}

for (var i = 0; i < somework.length; i++) {
   htmltoinsert="<h5 class='expname'><strong>" + somework[i] + "</strong></h5>"
   if (worklinks[i]!== "") {
      htmltoinsert+="<small class='text-muted'>Open Sourced <a href='"+worklinks[0]+"' target='_blank'> here </a></small>"
   } 
   if (workcheck[i]!== []) {
      htmltoinsert+="<p class='text-muted'> "+workcheck[i][0]+ " <a href='"+workcheck[i][1]+"' target='_blank'> here </a></p>"
   } 
   if (worksnap[i]!==[]) {
      htmltoinsert+='<img src="assets/img/'+worksnap[i]+'" alt="" class="workthumbnail">'
   }
   workblock.innerHTML +=htmltoinsert
}

sometalk=[
"6-Day Workshop on Full Stack Web Development"
]

talkaudience=[
"Bangalore Institure of Technology"
]

talksnap=[
"bit6daydec2022_1.jpeg"
]

for (var i = 0; i < sometalk.length; i++) {
   htmltoinsert="<h5 class='expname'><strong>" + sometalk[i] + "</strong></h5>"
   if (talkaudience[i]!== "") {
      htmltoinsert+="<strong> <p class='text-muted'> "+talkaudience[i]+"</p></strong>"
   } 
   if (talksnap[i]!==[]) {
      htmltoinsert+='<img src="assets/img/'+talksnap[i]+'" alt="" class="workthumbnail">'
   }
   talkblock.innerHTML +=htmltoinsert
}


/*
 * ARTICLES
 *
 * */
const articlecarouselindicatorblock = document.getElementById("article-carousel-indicators");
const articleblock = document.getElementById("article-carousel-inner");

articles = [
['First Move with Move!', 'http://sharc.attim.in/2023/01/28/hello-move.html', 'assets/img/article_banners/move_header.png'],
['DeFi - The future of Finance', 'http://sharc.attim.in/2023/01/23/defi.html', 'assets/img/article_banners/defi_article_banner_final2.png'],
['What is NFT?', 'http://sharc.attim.in/2023/01/14/what-is-nft.html', 'assets/img/article_banners/nftgallery_oncyber_compressed.jpg'],
['Web3 Gaming: The future of Gaming!', 'http://sharc.attim.in/2023/01/07/web3-gaming.html', 'assets/img/article_banners/web3gaming_header.jpg'],
]

/*
							<div class="carousel-item carousel-img active">
								<img class="d-block w-100" src="assets/img/article_banners/move_header.png" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
									<h5>Web3 Gaming: The future of Gaming!</h5>
									<a href="http://sharc.attim.in/2023/01/07/web3-gaming.html">Check</a>
								</div>
							</div>
*/

for (var i = 0; i < articles.length; i++) {
    let nextSlide=i+1;
    activeClass = ''
    indicatorHTML = ''
    if (i==0) {
      indicatorHTML = 'class="active" aria-current="true"'
      activeClass = 'active'
    }
    indicatorHTML = '<button type="button" data-bs-target="#articleCarousel" data-bs-slide-to="'+i.toString()+'" aria-label="Slide" ' + indicatorHTML + '></button>'
    articlecarouselindicatorblock.innerHTML += indicatorHTML

    htmltoinsert = ' <div class="carousel-item carousel-img '+activeClass+'">  \
								<img class="d-block w-100" src="' + articles[i][2] + '" alt="Second slide"> \
                <div class="carousel-caption d-none d-md-block"> \
									<h5>' + articles[i][0] + ' </h5> \
									<a href="' + articles[i][1] + '" target="_blank">Check</a> \
								</div> \
							</div>'
    articleblock.innerHTML += htmltoinsert
}
