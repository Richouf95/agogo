let btn20s = document.getElementById('btn20s');
let btn5m = document.getElementById('btn5m');
let btn15m = document.getElementById('btn15m');
let btn20m = document.getElementById('btn20m');
let btn30m = document.getElementById('btn30m');
let saisiheure = document.getElementById('saisiheure');
let chrono = document.getElementById('chrono');
let finia = document.getElementById('finia');
let msgarret = document.getElementById('msgarret');
let stopchrono = document.getElementById('stopchrono');
let spanminute = document.getElementById('spanminute');
let spansconde = document.getElementById('spanseconde');
let finih = document.getElementById('finih');
let finim = document.getElementById('finim');
let finis = document.getElementById('finis');
let msg1 = "Compte à rebour Arrêté !";
let msg2 = "Compte à rebour terminé !";


saisiheure.addEventListener('change', recupheure);

    function recupheure (e){
        let heureRecupere = e.target.value;
        msgarret.innerHTML = "";
        let timeRecupere = heureRecupere * 60;
        let timeRecupereMilli = timeRecupere * 1000;
        
        function z () {
            if (timeRecupere >= 0) {
                const minute = Math.floor(timeRecupere / 60);
                const second = timeRecupere % 60;
                timeRecupere--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }
        setInterval(z, 1000);

        setTimeout(afficherMsg, timeRecupereMilli);
            function afficherMsg(){
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + timeRecupereMilli + 3600000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, timeRecupereMilli);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';
        
        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                timeRecupere =0;
                setTimeout(deblocquerbtn, 100);
                msgarret.innerHTML = msg1;
            }
    }

// Heure = 6200000



btn20s.addEventListener('click', top20s);

    function top20s () {
        msgarret.innerHTML = "";
        let time = 20;

        function z () {
            if (time >= 0) {
                const minute = Math.floor(time / 60);
                const second = time % 60;
                time--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }
        setInterval(z, 1000);

        setTimeout(afficherMsg, 20000);
            function afficherMsg(){
                fStopChrono();
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + 3620000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, 20000);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';

        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                time =0;
                setTimeout(afficherMsg, 6200000);
                setTimeout(deblocquerbtn, 100);
                setTimeout(aMsg1, 100);
                    function aMsg1(){
                        msgarret.innerHTML = msg1;
                    }
            }
    }


btn5m.addEventListener('click', top5m);

    function top5m () {
        msgarret.innerHTML = "";
        let time = 300;

        function z () {
            if (time >= 0) {
                const minute = Math.floor(time / 60);
                const second = time % 60;
                time--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }
        setInterval(z, 1000);

        setTimeout(afficherMsg, 300000);
            function afficherMsg(){
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + 3900000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, 300000);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';

        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                time =0;
                setTimeout(deblocquerbtn, 100);
                msgarret.innerHTML = msg1;
            }
    }


btn15m.addEventListener('click', top15m);

    function top15m () {
        msgarret.innerHTML = "";
        let time = 900;

        function z () {
            if (time >= 0) {
                const minute = Math.floor(time / 60);
                const second = time % 60;
                time--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }
        setInterval(z, 1000);

        setTimeout(afficherMsg, 900000);
            function afficherMsg(){
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + 4500000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, 900000);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';

        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                time =0;
                setTimeout(deblocquerbtn, 100);
                msgarret.innerHTML = msg1;
            }
    }

    
btn20m.addEventListener('click', top20m);

    function top20m () {
        msgarret.innerHTML = "";
        let time = 1200;

        function z () {
            if (time >= 0) {
                const minute = Math.floor(time / 60);
                const second = time % 60;
                time--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }
        setInterval(z, 1000);

        setTimeout(afficherMsg, 1200000);
            function afficherMsg(){
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + 4800000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, 4800000);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';

        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                time =0;
                setTimeout(deblocquerbtn, 100);
                msgarret.innerHTML = msg1;
            }
    }


btn30m.addEventListener('click', top30m);

    function top30m () {
        msgarret.innerHTML = "";
        let time = 1800;

        function z () {
            if (time >= 0) {
                const minute = Math.floor(time / 60);
                const second = time % 60;
                time--;
                spanminute.innerHTML = (minute < 10) ? `0${minute} :` : `${minute} :`;
                spansconde.innerHTML = (second < 10) ? `0${second}` : `${second}`;
            } else {
                
            }
        }

        setInterval(z, 1000)
        setTimeout(afficherMsg, 1800000);
            function afficherMsg(){
                msgarret.innerHTML = msg2;
            }

        const now = new Date().getTime();

        const x = now + 5400000;
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secondss = Math.floor((x % (1000 * 60)) / (1000));

        finih.innerHTML = (hours < 10) ? `0${hours}` : `${hours}`;
        finim.innerHTML = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        finis.innerHTML = (secondss < 10) ? `0${secondss}` : `${secondss}`;
        finia.innerHTML = "La pause finie à : " + finih.textContent + 'h ' + finim.textContent + 'mn ' + finis.textContent + 's';

        setTimeout(blocquerbtn, 50);
            function blocquerbtn() {
                btn20s.disabled = true;
                btn5m.disabled = true;
                btn15m.disabled = true;
                btn20m.disabled = true;
                btn30m.disabled = true;
                saisiheure.disabled = true;
            }

        setTimeout(deblocquerbtn, 1800000);
            function deblocquerbtn() {
                btn20s.disabled = false;
                btn5m.disabled = false;
                btn15m.disabled = false;
                btn20m.disabled = false;
                btn30m.disabled = false;
                saisiheure.disabled = false;
            }

        stopchrono.style.visibility = 'visible';

        stopchrono.addEventListener('click', fStopChrono)
            function fStopChrono(){
                time =0;
                setTimeout(deblocquerbtn, 100);
                msgarret.innerHTML = msg1;
            }
    }





// function getChrono() {
//     const now = new Date().getTime();
//     const countDowndate = new Date('July 24, 2022').getTime() + 20000;
//     let distanceBase = countDowndate - now;

//     const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
//     const secondss = Math.floor((distanceBase % (1000 * 60)) / (1000));

//     chrono.innerHTML = `${days}j ${hours}h ${minutes}m ${secondss}`;
// }

// getChrono();

// const counDownInterval = setInterval(getChrono, 1000)
