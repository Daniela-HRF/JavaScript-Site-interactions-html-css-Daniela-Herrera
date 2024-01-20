document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            
            tabs.forEach(function (tab) {
                tab.classList.remove('tab-active');
            });

            const contents = document.querySelectorAll('.content');
            contents.forEach(function (content) {
                content.classList.remove('active');
            });

            this.classList.add('tab-active');

            if (this.classList.contains('tab-nomDeLaxe')) {
                const axisClass = this.classList[1];
                const activeContent = document.querySelector(`.content.${axisClass}`);
                activeContent.classList.add('active');
            }
        });
    });
});