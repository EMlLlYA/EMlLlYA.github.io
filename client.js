$(document).ready(function() {
    var links = [
		{
            name: 'spectrum',
            link: 'http://steamcommunity.com/id/3x6fv'
        },
		{
            name: 'sonder',
            link: 'http://steamcommunity.com/id/therealdealmao'
        },
    {
            name: 'athena',
            link: 'https://steamcommunity.com/id/athvna/'
    },
		{
            name: 'delusional',
            link: 'http://steamcommunity.com/id/copycat11/'
        },
		{
            name: 'clue',
            link: 'http://steamcommunity.com/id/qyoto'
        },
		{
            name: 'kyle',
            link: 'http://steamcommunity.com/id/kyl3333/'
        },
		{
            name: 'soup',
            link: 'http://steamcommunity.com/id/mynamejefflol'
        },
		{
            name: 'pstlgrp',
            link: 'http://steamcommunity.com/id/pstlgrp/'
        },
		{
            name: 'sinner',
            link: 'http://steamcommunity.com/id/Sinnerd/'
        },
    ];

    for(var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '" target="_blank">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        if(i != links.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 20000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
