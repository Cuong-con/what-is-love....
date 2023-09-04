 $(window).on('load', function (event) {
        $('body').removeClass('preloading');
        $('.loadingLove').delay(1000).fadeOut('fast');
        function getHeart(e) {
            let ele = document.createElement("div");
            ele.className = "element"
            document.querySelector("body").prepend(ele)
            ele.style.left = e.clientX + 'px';
            ele.style.top = e.clientY - 10 + 'px';
            setTimeout(() => {
                let text = document.querySelectorAll(".element")[0],
                    directionX = Math.random() < .5 ? -1 : 1,
                    directionY = Math.random() < .5 ? -1 : 1

                text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 100)) + 'px';
                text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 100)) + 'px';
                text.style.opacity = 0;
                text.style.transform = 'scale(0.4)'
                text.innerHTML = "💗"
                text.style.zIndex = "100"

                setTimeout(() => {
                    ele.remove()
                }, 1000)
            }, 10)
        }
        document.onmousemove = function (e) {
            getHeart(e)
        }
        document.onclick = function (e) {
            let ele = document.createElement("div");
            ele.className = "heartRain"
            document.querySelector("body").prepend(ele);
            ele.style.left = e.clientX - 10 + 'px';
            ele.style.top = e.clientY - 10 + 'px';
            ele.innerHTML = "💗"
            setTimeout(() => {
                ele.style.top = "calc(85% - 25px)"
            }, 100)
            setTimeout(() => {
                ele.style.opacity = 0
            }, 3000)
            setTimeout(() => {
                ele.remove()
            }, 4000)
        }
        document.onmousedown = (e) => {
            getHeart(e)
        }

        const typingSpeed = 100; // milliseconds per character

        let charIndex = 0;
        function typeText() {
            if (charIndex < textToType.length) {
                inputField.value += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
            if (inputField.value.length == textToType.length) {
                setTimeout(() => {
                    document.querySelector(".buttonLove").style.transform = "translateY(0%)";
                    document.querySelector(".cricleBtn").style.transform = "scale(0.1)"
                }, 1000)
                setTimeout(() => {
                    document.querySelector(".cricleBtn").style.transform = "scale(1)"
                    document.querySelector(".cricleBtn").innerHTML = "💗"
                }, 2000)
                setTimeout(() => {
                    document.querySelector(".buttonLove").style.width = "120px"
                    document.querySelector(".button").style.transform = "translateX(25px)"
                }, 2500)
                setTimeout(() => {
                    document.querySelector(".button").style.width = "calc(100% - 25px)"
                    document.querySelector(".button").style.height = "10px"
                }, 3000)
                setTimeout(() => {
                    document.querySelector(".button").style.height = "30px"
                }, 3500)
                setTimeout(() => {
                    document.querySelector(".button").innerHTML = "Nhận thư"
                }, 4000)
            }
        }

        setTimeout(() => {
            typeText();
        }, 11500)
    });