String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const values = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...values);
};

async function jobs() {
    const jobTemplate = await fetch("template/job_template.html").then(response => response.text());
    const jobTileTemplate = await fetch("template/job_tile_template.html").then(response => response.text());
    const jobData = await fetch("jobs.json").then(response => response.json());
    let jobHtml = "";
    let jobTileHtml = "";
    jobData.jobs.forEach(job => {
        jobHtml += jobTemplate.interpolate(job);
        jobTileHtml += jobTileTemplate.interpolate(job);
    });
    document.getElementById("vacature_single_blok_inner").innerHTML = jobHtml + "<div style=\"clear:both;height:0;\"></div>";
    document.getElementById("vacature_verzamel_blok_inner").innerHTML = jobTileHtml + "<div style=\"clear:both;height:0;\"></div>";
    $(".vacature_btn_terug").click(function () {
        $("#vacature_single_blok").animate({"height": "0px"}, 500, function () {
            jQuery("html,body").animate({scrollTop: 0}, 500);
            $(".vacature_content_blok").css("display", "none");
        })
    });
    $(".vacature_item").click(function () {
        const ind = $(this).index();
        $("#vacature_single_blok").animate({"height": "0px", "marginBottom": "0px"}, 500, () => {
            jQuery("html,body").animate({scrollTop: 0}, 500);
            $(".vacature_content_blok").css("display", "none");
            $(".vacature_content_blok:eq(" + ind + ")").css("display", "block");
            const height = $(".vacature_content_blok:eq(" + ind + ")").height() + 80;
            $("#vacature_single_blok").animate({"height": height + "px", "marginBottom": "30px"}, 500);
        });
    });
    $(".vacature_item_hover").each(() => $(this).height($(this).parent().parent().height()));
}

document.addEventListener("DOMContentLoaded", jobs);
