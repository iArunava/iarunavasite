const expblock = document.getElementById("experienceblock");
const workblock = document.getElementById("work");
const talkblock = document.getElementById("talkblock");
const skillblock = document.getElementById("skillblock");
const summaryblock = document.getElementById("summaryblock");

experiences = [
'Software Engineer, Aviso AI', 
//'Backend Engg, Aviso AI',
"Founding Engineer #1, Ecocrumb (Techstars '21)",
"Founding Engineer, Attim",
"Research Intern, Microsoft Research",
"Computer Vision Intern, OpenCV",
//"Data Science Intern, Datamatica",
]

expduration = [
'Jan 2023 - Present',
//'Dec 2022 - Jan 2023',
'Nov 2021 - Dec 2022',
'Sep 2020 - Nov 2021',
'Aug 2019 - Aug 2020 &nbsp; [1.1 yrs]',
'Feb 2019 - Jul 2019',
//'May 2019 - Jul 2019',
//'Feb 2019 - March 2019',
]


skills = {
'expskills' : [['Git', 'Python', 'Django', 'Amazon S3', 'boto3', 'Twilio Integration', 'OAuth', 'Google OAuth', 'Gmail Integration'],
['Git', 'Python', 'Django', 'Amazon S3'],
['Git'],
['Git'],
['Git'],
['Git'],
['Git']],
}

summarydesp = [
["Spearheaded engineering for Sales Engagement, to deliver a new product within Aviso that is being utilized by internal teams and have fetched multiple paying customers, which has increased revenue for the company by 30% for Sales Engagement enabled customers. Balanced hands-on coding, cross-functional collaboration, and mentorship while ensuring code quality.",
"Engineered the Interaction Summary REST API, to replace competitors with Aviso and help customers switch to Aviso, processes 1 million+ rows in seconds to deliver interactions data to cusotmers for easy processing.",
"Engineered Aviso's Actual vs Snapshot view, which enabled customers to insights on how deals have been effected since that quarter / month, which is being utilized by all customers across Aviso."
]
,
[],
[],
[],
[],
[]
]


expdesp = [
["Managing and priotization of tickets for the dev team for completion of Sales Engagement Module.",
"Implemented Aviso's Browser real-time Call and SMS/Email scheduling.",
"Spearheading the backend for Aviso's Sales Engagement Module. A complete seperate module which is being built from scratch. Devliered the 1st phase And have received terrific positive feedback from internal and customer demos.",
"Followed key Software Development Principles to modify legacy code that would allow future developers to make updates to the codebase efficiently as per needed requirement without spending lot of time going through everything.",
"Implemented single-handedly REST API for Interactions Data consumption for the client for millions of rows consumption in seconds. Completed in a tight deadline. Enabled customer switch to our platform.",
"Delivered Aviso's Actual View/Snapshot View Feature. (Single-handedly)",
"Delivered key patches for production issues in strict timelines.",
"Enabling new joiners to ramp up in the platform faster.",
"Re-designed the insertion pipelines for reducing insertion time from 50s to almost 4s.",
"Worked on Mongodb pipelines and Elasticsearch upgrades.",
"Collaboration across teams to resolve disputes enabling faster shipment of tickets to production.",
"Programmed multiple bash and python scripts for automation based on requirements.",
"Activity can be checked at <a href='github.com/arc-aviso'>Github arc-aviso</a> and <a href='github.com/arcaviso'>Github arcaviso</a>"],

//["Worked towards updating the search infrastructure entirely to optimize and get to almost real-time chat indexing in the app using Telegram APIs.",
//"Worked with Python based asynchronous programming using asyncio/asyncpg.",
//"Worked on benchmarking different python postgres clients.",
	//"Worked in a lot of Python async code. Primarily focused on the search engine that was powering supermind. The search engine would index conversation data from different web3 channels that is spread across telegram, discord and twitter. Discord and twitter were under implementation. "],

[
"Engineered and single-handedly built the entire backend and infrastructure to deliver the beta version of Ecocrumb, securing the first set of paying Fortune 500 clients, while ensuring the system was efficient for end-users and easy for future engineers to build upon.",
"Built End-to-End Deployment Pipelines using Github Actions and AWS Fargate, to eliminate human interventions in deployment, and reduce deployment times by over an 80% or more.",
"Wrote Automation Scripts and Data Pipelines, to scrape required data from 15+ sources including websites, PDFs and Excel Sheets and restructure them into a common format, which enabled customers to fill their ESG Reports across different standards atleast 50% faster."
],
[
"Designed and Engineered a MLOps platform backend (Flask) and frontend (Vue), leading a team of 3 engineers to achieve MVP delivery which received strong positive feedback from 10+ angel investors and pre-seed funding."
"Built a Raspberry Pi-powered device for real-time environmental analysis in day as well as night using Thermal Camera and prototyped a SaaS platform for statistical feature analysis of datasets.",
"Designed End-to-End Automated Pipelines for High Quality Video Generation for Youtube utilizing freely available video and audio data on the internet, <strong>reducing video generation times by over a 95%</strong>."
],
[
"Worked on a paper which aims to do semi-supervised segmentation. We invented an algorithm that takes 5 paired images and learns how to perform proper segmentation with just 5 images and then applied that to the unseen data to do proper segmentation for all other images.",
"We even went far to do that with 1 paired image.",
"Pointer for the interested: https://arxiv.org/abs/2010.12622",
],
[
"Developed course code and techincal content for OpenCV’s Computer Vision and Deep Learning courses, focusing on segmentation algorithms",
"Published an article on Semantic Segmentation using PyTorch - [OpenCV] and implemented text detection algorithms using EAST and reproduced multiple other DL/ML Papers."
],
//[
//"Worked on Projects focused on Segmentation",
//"Reproduced a paper to solve a business problem by Semantic Segmentation.",
//"Used EAST for text Detection on Articles.",
//],
]

for (var i = 0; i < experiences.length; i++) {
    bodyhtml='<span><div  class="alert alert-primary" role="alert"><ul>'
    for (var j=0; j < summarydesp[i].length; j++) {
        // bodyhtml+= "· " + summarydesp[i][j] + "</br>"
        bodyhtml+= "<li>" + summarydesp[i][j] + "</li>"
    }
    bodyhtml+='</ul></div></span>'

    bodyhtml+='<span class=""><p>'
    for (var j=0; j < expdesp[i].length; j++) {
        bodyhtml+= "· " + expdesp[i][j] + "</br>"
    }
    bodyhtml+='</p></span>'


    // Exp skills
    /**
    expskills=skills['expskills']
    skilltags='<div class=""><h5> Technical Skills </h5>'
    for (var j=0; j < expskills[i].length; j++) {
        skilltags+= " <button type='button' class='btn btn-primary'> \
         " +  expskills[i][j] + " <span class='badge badge-light'>0</span> \
            <span class='sr-only'>unread messages</span> \
            </button>"
    }
    skilltags+='</div>'
    **/
    expskills=skills['expskills']
    skilltags='<div class=""><h5> Technical Skills </h5>'
    for (var j=0; j < expskills[i].length; j++) {
        skilltags += '<span class="badge bg-primary"> ' + expskills[i][j] + '</span> &nbsp; '
    }
    skilltags+=' </div>'


    htmltoinsert = '<div class="accordion-item"> <h2 class="accordion-header"> \
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_exp_' + i.toString() + '" aria-expanded="true" aria-controls="collapse_exp_'+i.toString() +'"><h5 class="expname"><strong>' + experiences[i] + '</strong>  &nbsp;  &nbsp;  &nbsp;</h5><strong><small class="text-muted"> ' + expduration[i] + '  </small></strong> </button> </h2> \
                    <div id="collapse_exp_' + i.toString() + '" class="accordion-collapse collapse" data-bs-parent="#certificateblock"> \
                     <div class="accordion-body">' + bodyhtml  + ' \
									<button class="btn btn-disabled"> <a href="' + '' + '" target="_blank">Learn more</a> </button> \
                  ' + skilltags + ' </div> \
							</div> </div>'



   //htmltoinsert="<h5 class='expname'><strong>" + experiences[i] + "</strong></h5>"
   //htmltoinsert+="<strong><small class='text-muted'> " + expduration[i] + " </small></strong>"
   /*
   htmltoinsert+='<ul class="list-group">'
   for (var j=0; j < expdesp[i].length; j++) {
       htmltoinsert+="<li class='list-group-item'>" + expdesp[i][j] + "</li>"
   }
   htmltoinsert+='</ul>'
   */
   expblock.innerHTML +=htmltoinsert
}



somework=[
"Flappy Dragon",
"Scratch AI",
]
worklinks = [
"https://github.com/iarunava/flappydragon",
"https://github.com/iarunava/scratchai",
]
workcheck = [
["Play and share your high score! Check ", "http://flappydragon.attim.in/"],
["Checkout this article shared by the best ML practioners in like @hardmaru. Written by me :) (The Floydhub site has gone down now)", "https://twitter.com/hardmaru/status/1188988884249653248?lang=en"],
]
workdesp = [
]

worksnap = [
"flappydragon_thumb2.png",
"scratchai_thumb.png",
]

for (var i = 0; i < somework.length; i++) {
   htmltoinsert="<div class='col-sm-3 d-flex justify-content-center'> <div class='card' style='width: 20rem;'> <img class='card-img-top workimage' src='assets/img/"+worksnap[i]+"' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>" + somework[i] + "</h5>"
   //htmltoinsert="<h5 class='expname'><strong>" + somework[i] + "</strong></h5>"
   if (worksnap[i]!==[]) {
      //htmltoinsert+='<img src="assets/img/'+worksnap[i]+'" alt="" class="workthumbnail">'
   }
   if (workcheck[i]!== []) {
      htmltoinsert+="<p class='row lead text-muted'> "+workcheck[i][0]+ " <a href='"+workcheck[i][1]+"' target='_blank'> here </a></p>"
   }
   if (worklinks[i]!== "") {
      htmltoinsert+="<a class='btn btn-primary' href='"+worklinks[i]+"' target='_blank'> Explore </a>"
   } 
   workblock.innerHTML +=htmltoinsert + "</div></div></div>"
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
['First Move with Move!', 'https://iarunava.github.io/sharcblog/2023/01/28/hello-move.html', 'assets/img/article_banners/move_header.png'],
['DeFi - The future of Finance', 'https://iarunava.github.io/sharcblog/2023/01/23/defi.html', 'assets/img/article_banners/defi_article_banner_final2.png'],
['What is NFT?', 'https://iarunava.github.io/sharcblog/what-is-nft.html', 'assets/img/article_banners/nftgallery_oncyber_compressed.jpg'],
['Web3 Gaming: The future of Gaming!', 'https://iarunava.github.io/sharcblog/2023/01/07/web3-gaming.html', 'assets/img/article_banners/web3gaming_header.jpg'],
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

/*
 * CERTIFICATES
 *
 * */
const certificateblock = document.getElementById("certificateblock");

items = [
['NPTEL - Design and analysis of algorithms', '82/100', 'https://archive.nptel.ac.in/content/noc/NOC17/SEM2/Ecertificates/106/noc17-cs27/Course/NPTEL17CS27S1450979171051878.jpg'],
['NPTEL - Introduction to algorithms and analysis', '99/100', 'https://archive.nptel.ac.in/content/noc/NOC17/SEM2/Ecertificates/106/noc17-cs20/Course/NPTEL17CS20S2460595171014762.jpg'],
['NPTEL - Programming in C++', '88/100', 'https://archive.nptel.ac.in/content/noc/NOC17/SEM2/Ecertificates/106/noc17-cs24/Course/NPTEL17CS24S2451065171051878.jpg'],
['NPTEL - Programming, Data Structures and Algorithms in Python', '78/100', 'https://archive.nptel.ac.in/content/noc/NOC16/SEM2/Ecertificates/106/noc16-cs11/Course/NPTEL16CS1118420252.jpg'],
['NPTEL - Introduction to Modern Application Development', '80/100', 'https://archive.nptel.ac.in/content/noc/NOC17/SEM1/Ecertificates/106/noc17-cs06/Course/NPTEL17CS0626450558AN.jpg'],
['NPTEL - Database Management System', '82/100', 'https://archive.nptel.ac.in/content/noc/NOC18/SEM1/Ecertificates/106/noc18-cs15/Course/NPTEL18CS15S35121151810060917.jpg'],
['NPTEL - Data Science for Engineers', '75/100', 'https://archive.nptel.ac.in/content/noc/NOC18/SEM1/Ecertificates/106/noc18-cs28/Course/NPTEL18CS28S15107361810060917.jpg'],
['NPTEL - Deep Learning', '72/100', 'https://archive.nptel.ac.in/content/noc/NOC18/SEM2/Ecertificates/106/noc18-cs41/Course/NPTEL18CS41S215202001810170924.jpg'],
]


for (var i = 0; i < items.length; i++) {
    htmltoinsert = '<div class="accordion-item"> <h2 class="accordion-header"> \
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i.toString() + '" aria-expanded="true" aria-controls="collapse'+i.toString() +'"><strong>' + items[i][0] + '</strong></button> </h2> \
                    <div id="collapse' + i.toString() + '" class="accordion-collapse collapse" data-bs-parent="#certificateblock"> \
                     <div class="accordion-body">' + items[i][1]  + ' \
									<button> <a href="' + items[i][2] + '" target="_blank">Check Certificate</a> </button> \
                 </div> \
							</div> </div>'
    certificateblock.innerHTML += htmltoinsert
}


/*
 * Skills
 *
 * */
const skill_categories = ["Languages", "Backend", "Technical", "Integrations", "Cloud"]
skill_details = {
    "Languages" : ["Bash", "Python", "Java",  "C++", "Javascript", "C"],
    "Backend" : ["Django", "Django Rest Framework", "Flask", "Docker", "JSON", "Pytest"],
    "Technical" : ["Data Structures", "Algorithms", "Git", "Selenium", "Computer Vision", "NLP", "Data Analysis", "OpenCV", "PostgreSQL", "MongoDB", "Machine Learning", "Deployment", "Database Management", "Jenkins"],
    "Cloud" : ["AWS", "AWS S3", "AWS Lambda", "IAM", "AWS Fargate", "Load Balancers", "GCP"],
    "Integrations" : ["Twilio", "Google OAuth", "Microsoft Graph", "Azure", "Outlook"],
}

for (var i = 0; i < skill_categories.length; i++) {
    var section = skill_categories[i];
    htmltoinsert = '<div><h5> ' + section + ':  </h5> <p>'
    for (var j = 0; j < skill_details[section].length; j++) {
        htmltoinsert += skill_details[section][j]
        if (j!=skill_details[section].length-1) {
            htmltoinsert+=', '
        }
    }
    htmltoinsert+='</p>'
    htmltoinsert+='</div>'
    skillblock.innerHTML += htmltoinsert
}


/*
 * Summary
 *
 * */

const professional_summary = "Highly skilled Software Engineer with expertise in backend development, system architecture, and cloud technologies. Proven track record in leading engineering projects, driving revenue growth, and delivering high-impact solutions. Experienced in developing scalable applications, designing APIs, and automating processes. Recognized for strong technical leadership and problem-solving abilities."

htmltoinsert = '<div><p> ' + professional_summary + ' </p> </div>'
summaryblock.innerHTML += htmltoinsert





// Make all links open in new tab
function externalLinks() {   for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {     var b = c[a];     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")   } } ; externalLinks(); 
