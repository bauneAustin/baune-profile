<div class="coffee-container">
    <div class="glow"></div>
    <div class="cup">
        <div class="top">
            <div class="circle">
                <div class="coffee"></div>
            </div>
        </div>
        <div class="handle"></div>
    </div>
    <div class="steam">
        <span style="--i:1"></span>
        <span style="--i:3"></span>
        <span style="--i:16"></span>
        <span style="--i:5"></span>
        <span style="--i:13"></span>
        <span style="--i:20"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:10"></span>
        <span style="--i:8"></span>
    </div>
</div>

<style>
    .coffee-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }

    .glow {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 100px;
        background: transparent;
        border-radius: 50%;
        filter: blur(20px);
        box-shadow: 0 0 40px 20px rgba(59, 130, 246, 0.5);
        z-index: 1;
    }

    .cup {
        position: relative;
        z-index: 2;
        width: 220px;
        height: 200px;
        background: linear-gradient(to right, #f9f9f9, #d9d9d9);
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
    }

    .top {
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 20px;
        background: linear-gradient(to right, #f9f9f9, #d9d9d9);
        border-radius: 50%;
    }

    .circle {
        position: absolute;
        top: 5px;
        left: 10px;
        width: 200px;
        height: 25px;
        background: linear-gradient(to right, #f9f9f9, #d9d9d9);
        border-radius: 50%;
        overflow: hidden;
    }

    .coffee {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #4b2b20;
        border-radius: 50%;
    }

    .handle {
        position: absolute;
        right: -35px;
        top: 45px;
        width: 80px;
        height: 80px;
        border: 15px solid #d9d9d9;
        border-left: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-radius: 50%;
        transform: rotate(45deg);
    }

    .steam {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
    }

    .steam span {
        position: absolute;
        bottom: 100px;
        left: -12px;
        /* right: 0px; */
        display: block;
        margin: 0 5px;
        min-width: 15px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        animation: steam 4s linear infinite;
        opacity: 0;
        filter: blur(5px);
    }

    .steam span:nth-child(odd) {
        transform: translate(20px);
    }

    .steam span:nth-child(even) {
        transform: translate(-20px);
    }

    @keyframes steam {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-50px) scale(2);
            opacity: 0;
        }
    }

    .steam span {
        animation-delay: calc(var(--i) * 0.1s);
    }
</style>
