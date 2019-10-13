String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const values = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...values);
};

async function jobs() {
    const jobTemplate = await fetch("job_template.html").then(response => response.text());
    const jobData = await fetch("jobs.json").then(response => response.json());
    jobData.jobs.forEach(job => {
        const div = document.createElement("div");
        div.innerHTML = jobTemplate.interpolate(job);
        document.getElementById("vacature_single_blok_inner").appendChild(div);
    });
    $(".vacature_btn_terug").click(function () {
        $("#vacature_single_blok").animate({"height": "0px"}, 500, function () {
            jQuery("html,body").animate({scrollTop: 0}, 500);
            $(".vacature_content_blok").css("display", "none");
        })
    });
}

document.addEventListener("DOMContentLoaded", jobs);
