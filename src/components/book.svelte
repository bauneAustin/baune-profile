<div class="book">
    <div class="page left-page"></div>
    <div class="page right-page"></div>
</div>

<style>
    .book {
        display: flex;
        justify-content: center;
    }

    .page {
        position: relative;
        width: 80px;
        height: 100px;
        background-color: #f2f4f5;
        border-radius: 2px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        padding: 20px;
    }

    .left-page {
        background: linear-gradient(to right, #f2f4f5 95%, #ddd 100%);
        border-right: 1px solid #ddd;
    }

    .right-page {
        background: linear-gradient(to left, #f2f4f5 95%, #ddd 100%);
        border-left: 1px solid #ddd;
    }
</style>
