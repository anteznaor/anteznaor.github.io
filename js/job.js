String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const values = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...values);
};

document.addEventListener("DOMContentLoaded", () => {
    fetch("job_template.html").then(response => response.text())
        .then(html => fetch("jobs.json").then(response => response.json()).then(json => {
            json.jobs.forEach(job => {
                const div = document.createElement("div");
                div.innerHTML = html.interpolate(job);
                document.getElementById("vacature_single_blok_inner").appendChild(div);
            });
            $(".vacature_btn_terug").click(function () {
                $("#vacature_single_blok").animate({"height": "0px"}, 500, function () {
                    jQuery("html,body").animate({scrollTop: 0}, 500);
                    $(".vacature_content_blok").css("display", "none");
                })
            });
        }));
});
