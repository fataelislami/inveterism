import $ from "./_snowpack/pkg/jquery.js";
import "./_snowpack/pkg/slick-carousel.js";

// Slick
$(document).ready(()=>{
    $("#slickTab1").slick(
        {
            dots: true,
            autoplay:true,
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data();
                console.log(thumb)
                return '<a class="rounded-full w-8 h-8 border-2 border-gray-100 flex justify-center items-center text-gray-500">'+(i+1)+'</a>';
            }
        }
    );
})

// TABS
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("border-green-400", "border-b", "-mb-px", "opacity-100"); tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("border-green-400", "border-b-4", "-mb-px", "opacity-100");
    });
});

document.getElementById("default-tab").click();

