import React from "react";
//плавное скрытие элемента при dispay none
//ref вешается на сам элемент который будет скрываться. функция вешается на триггер через onClick
export function slowDisplayNone(ref: any) {
    let container = ref.current;
    if (!container.classList.contains("active")) {
        container.classList.add("active");
        container.style.height = "auto";

        let height = container.clientHeight + "px";

        container.style.height = "0px";

        setTimeout(function () {
            container.style.height = height;
        }, 0);
    } else {
        container.style.height = "0px";

        container.addEventListener(
            "transitionend",
            function () {
                container.classList.remove("active");
            },
            {
                once: true,
            }
        );
    }
    //стили для блока который будет скрываться.
    // #toggleMe {
    //     transition: height .25s ease;
    //     overflow: hidden;
    //   }
    //   #toggleMe:not(.active) {
    //     display: none;
    //   }
}
