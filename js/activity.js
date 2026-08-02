$(document).ready(function () {

    $("table tbody tr").each(function () {

        $(this).find("td").not(":first").each(function () {

            const activityCell = $(this);
            const activityText = activityCell.text().trim();

            if (activityText !== "Not Available") {

                activityCell.addClass("selectable");

                activityCell.on("click", function () {
                    $(this).toggleClass("selected");
                });

            } else {

                activityCell.addClass("unavailable");

            }

        });

    });

});