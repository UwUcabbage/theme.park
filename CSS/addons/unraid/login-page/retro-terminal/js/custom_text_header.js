
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>    ______        __     __                      
  / ____/____ _ / /_   / /_   ____ _ ____ _ ___ 
 / /    / __ `// __ \ / __ \ / __ `// __ `// _ \
/ /___ / /_/ // /_/ // /_/ // /_/ // /_/ //  __/
\____/ \__,_//_.___//_.___/ \__,_/ \__, / \___/ 
                                  /____/        
 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
