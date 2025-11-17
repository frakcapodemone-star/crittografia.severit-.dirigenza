
const HASH="473328a82dc7f26b59ef54b30c245441acc28cada9793a424b51992431ea3cdb";
// SITO CRITTOGRAFATO
async function sha256(str){
    const buf = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", buf);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b=>b.toString(16).padStart(2,"0")).join("");
}

async function chk(){
    let p=document.getElementById("pw").value;
    let h=await sha256(p);
    if(h===HASH){
        window.location.href="documento.html";
    } else {
        document.getElementById("err").innerHTML="Password errata.";
    }
}
