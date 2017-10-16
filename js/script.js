$(window).ready(function(){
    // SCROLL ANIMATION

    var btnScroll = $('.goToTop');
    btnScroll.on('click', function(){
        $('html, body').animate({
            'scrollTop' : 0
        }, 400);
    });

    // TOOLTIP'S FOR SKILL SECTION

    var icon = $('.iconWrapper > img');
    var iconText = $('.iconWrapper > span').text();
    var iconTooltip = $('.iconWrapper > .tooltip');
    var iconPosition = icon.position();
    var iconWidth = icon.width();
    var iconSize = (iconTooltip.width() / 2);
    iconTooltip.css({
        'display' : 'none'
    });

    icon.hover(
        function(){
            var posTop = $(this).position().top;
            var posLeft = $(this).position().left;
            var iconWide = $(this).width();
            var prevEl = $(this).prev();
            prevEl.css({
                top: posTop - 110 + 'px',
                left: posLeft + (iconWide /2) - iconSize + 10 + 'px'
            })
        },
        function(e){
            return
        }
    );

   

    // TABS FOR EXPIRIENCE SECTION
    var z = $('.job-icons > ul > li');
    var x = $('.job-content > div');
    var educationEl = $('.education-content');
    var expirienceEl = $(".expirience-content"); 
    var locationEl = $('.location-content');
    var contactEl = $(".contact-content");
    z.on('click', function(){
        z.each(function(){
            $(this).removeClass('active-icon');
        });
        x.each(function(){
            $(this).removeClass('active-content');
        });
        $(this).addClass('active-icon');
        if( $(this).hasClass("education") ){
            educationEl.addClass('active-content');

        } else if ( $(this).hasClass("expirience") ){
            expirienceEl.addClass('active-content');

        } else if ( $(this).hasClass("location") ){
            locationEl.addClass('active-content');

        } else if ( $(this).hasClass("contact") ){
            contactEl.addClass('active-content');

        }
    });

    // ANIMATION FOR ALL SECTION:
    //skills icon:
    var animateIcon = $('.iconWrapper');
    var animateIconIMG = $('.iconWrapper img');
    var sectionSkillsPos = $('#skills');
    var skillsPos = sectionSkillsPos.offset().top;

    // rewiev elements:
    var sectionRewievPos = $('#review');
    var rewievLeft = $('.jobs-review');
    var rewievRight = $('.jobs-details');
    var rewievPos = sectionRewievPos.offset().top;

    // portfolio block:
    var portfolio = $('#portfolio');
    var blocks = $(".portfolioBlocks");
    var portPos = portfolio.offset().top;

    $(window).on('scroll', function(){
        var scrolltop = $(window).scrollTop();
    // skill section
        var distanceIcon = (skillsPos - scrolltop);
        if(distanceIcon <= 400){
            for(var i = 0; i < animateIconIMG.length; i++){
                animateIconIMG.eq(i).addClass('showAnimation');
            }
            iconTooltip.css({
                'display' : 'block'
            });
        };
    // review section
        var distanceRew = (rewievPos - scrolltop);
        if(distanceRew <= 400){
            rewievLeft.addClass('slideRewievSection');
            rewievRight.addClass('slideRewievSection');
        };

    // portfolio section
        var distancePort = (portPos - scrolltop);
        if(distancePort <= 300){
            blocks.addClass('showAnimation');
        };
    });


    // ADD ANIMIATION DELAY FOR SKILL ICON
    var wrapperIcon = document.querySelectorAll('.iconWrapper img');
    var counter = 0;
    for(var w = 0; w < wrapperIcon.length; w++){
        wrapperIcon[w].style.animationDelay = counter + 's';
        counter += 0.2;
    };

    // ICON FROM PORTFIOLIO SECTION:
    var portfolioIcon = $('.flipFront img');
    portfolioIcon.each(function(){
        $(this).attr('src', '/images/code.png');
    });


    // CHANGE COLOR FOR ICON IN SKILL SECTION
    var search = /images\/.+icon/i;
    for(var s = 0; s < wrapperIcon.length; s++){
        wrapperIcon[s].addEventListener('mouseenter', function(){
            var sr = this.src;
            var newS = search.exec(sr);
            this.src = newS + '.png'
        });
    };
    for(var y = 0; y < wrapperIcon.length; y++){
        wrapperIcon[y].addEventListener('mouseleave', function(){
            var sr = this.src;
            var newS = search.exec(sr);
            this.src = newS + '-hover.png'
        });
    };

    // SMOOTH SCROLL FOR HEADER
    var aboutMe = $('.aboutMeBtn'),
        resume = $('.resumeBtn'),
        project = $('.portfolioBtn'),
        hireMe = $('.hireMeBtn');

    var hightElAboutMe = $('#aboutMe').offset().top;
    var heightElSkills = $('#skills').offset().top;
    var heightElProject = $('#portfolio').offset().top;
    var heightElHireMe = $('body').height();

    aboutMe.on('click', function(){
        $("html, body").animate({
            'scrollTop' : hightElAboutMe
        }, 300);
    });

    resume.on('click', function(){
        $("html, body").animate({
            'scrollTop' : heightElSkills
        }, 300);
    });

    project.on('click', function(){
        $("html, body").animate({
            'scrollTop' : heightElProject
        }, 300);    
    });

    hireMe.on('click', function(){
        $("html, body").animate({
            'scrollTop' : heightElHireMe
        }, 400);   
    });
});