$(document).ready(function () {

    $("#activities table tbody tr").each(function () {

        $(this).find("td").not(":first").each(function () {

            var activityCell = $(this);
            var activityName = activityCell.text().trim();

            if (activityName !== "Not Available") {

                activityCell.addClass("selectable");

            } else {

                activityCell.addClass("unavailable");

            }

        });

    });

    $("#activities table tbody td.selectable").click(function () {

        var selectedCell = $(this);

        var activityName = selectedCell.text().trim();

        var columnIndex = selectedCell.index();

        var cliffName = $("#activities table thead th")
            .eq(columnIndex)
            .text()
            .trim();

        var rowIndex = selectedCell.parent().index();

        var activityKey = rowIndex + "-" + columnIndex;

        selectedCell.toggleClass("selected");

        if (selectedCell.hasClass("selected")) {

            $("#displaySelected").css({
                "visibility": "visible",
                "margin-top": "2em"
            });

            $("#result").append(
                "<p data-activity='" +
                activityKey +
                "'>" +
                activityName +
                " at <span>" +
                cliffName +
                "</span></p>"
            );

        } else {

            $("#result p[data-activity='" +
                activityKey +
                "']").remove();

            if ($("#result p").length === 0) {

                $("#displaySelected").css({
                    "visibility": "hidden",
                    "margin-top": "0"
                });

            }

        }

    });

});