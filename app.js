let text = document.getElementById("text");
let nombre = document.getElementById('name');
let prefix = document.getElementById('prefix');
let description = document.getElementById('description');
let snippet = document.getElementById('snippet');
let regex = new RegExp("\"", "g");
function code2snippet(){
let string = text.value;
/* reemplazamos las comillas dobles por comillas simples */
let string2 = string.replace(regex, "'");
/* reemplazamos los espacios dentro del string */
string2 = string2.replace(/\n|\r/g, '",\n"');
/* Metemos el string entre comillas */
string3 = '"';
string3 = string3.concat(string2, '",');
/* reemplazamos x espacios por "/t" que es la expresión regular de tab */
string3 = string3.replace(/  /g, '\\t');
/* quitamos la ultima coma */
let string4 = string3.substring(0, string3.length - 1);
/* agregamos el name, prefix y description */
snippet.value= 
`"${nombre.value}": { 
	"prefix": "${prefix.value}",
	"description": "${description.value}",
	"body": [
${string4}
]
}`
};
/* pegamos el resultado en el portapapeles*/
function copy() {
    let content = document.getElementById('snippet');
		let copy = document.querySelector('.fa-clone');
		let check = document.querySelector('.fa-check');
		
    content.select();
    document.execCommand('copy');
		copy.style.display = "none";
    check.style.display = "block";
		setTimeout(()=>{
			copy.style.display = "block";
			check.style.display = "none";
		}, 1250);
}
/* hacemos el text area autoajustable*/
let textarea = document.querySelector("#text");
textarea.style.cssText =`height: ${textarea.scrollHeight}px; overflow-y: hidden`;
textarea.addEventListener("input", e =>{
	textarea.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textarea.style.height = `${scHeight}px`;
});
description.style.cssText =`height: ${description.scrollHeight}px; overflow-y: hidden`;

description.addEventListener("input", e =>{
	description.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	description.style.height = `${scHeight}px`;
});