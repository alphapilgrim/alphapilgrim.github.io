#Project 4
##frontend-nanodegree-mobile-portfolio
---------------------------------------
Wanted to start by saying great project!
---------------------------------------
Please begin by knowing that I tried many variations
of builds to see what yeilded the best performace on
the entire project. I began with learning a bit about
gzip and compressing my own files(which didnt end up going
with). I tried multiple compression algorithms also in
succession to see how much reduction I could squeeze
from the images and code without losing any visible
quality. I tried to make as many comments along the way
in short to help with my thought process. I have versions
of all files in minified and compressed versions(some
minified and compressed). One thing I have to be honest
about, in Pizza's main.js I am not completely satisfied
with the way I have the second for loop setup. I know
although my page is performing well under 60FPS there
is more I would have like to have done there. Im sure
I'll look back and it'll have been something simple but
for now, stumped am I.

Some of the optimizations made :
-----------------------------------------

Images compressed and resized, along with defining the
width and height to aid the rendering.

Made changes to the DOM selector methods, went from using
the querySelectorAll to getElementByClass. It proved to
boost performance significantly.

With some of the for loops, I tried to figure out how I could
save the computational variables outside of the loop. With help
(http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html)
(http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/).

Minified and compress my html,css, js. Some of the css, and js
we're inlined which proved to yeild a performance boost.

Initially had tried to build my project on a gulp devDep.
but I had a bit of trouble. Looking back it was probably best
for me to learn how to make these optimizations without a
tasker. Next time I will be sure to use Gulp.

				INSTRUCTIONS
-----------------------------------------
! 1. Please begin with creating a simple server with python
     (!!! inside of the the frontend folder).
python -m SimpleHTTPServer 8080 <--- included for easy
copy and paste on terminal.

2. Next please create a tunnel with ngrok to serve also
port 8080 (!!! also inside of the the frontend folder).
ngrok 8080 <--for copy and paste on terminal. If you
dont have ngrok please download node and install npm,
then ngrok.
	2-0 Install of node.js https://nodejs.org/download/
	2-1 Install of npm https://docs.npmjs.com/cli/install
	2-2 Install of ngrok https://www.npmjs.com/package/ngrok

3. Now you will be able to serve the project on a local
tunnel. This is how my version of the site can be tested.
Please contact me via email/twitter if you have any
question/probelms.
------------------------------------------
timothy.lombrana@gmail.com && @alphapilgrim

Thanks Again Udacity Team Loving the nano-degree.