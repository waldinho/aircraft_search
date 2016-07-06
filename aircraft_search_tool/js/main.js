var MAKE_DATA_PATH = "../aircraft_search_tool/js/make_model.json";
var CHAPTER_DATA_PATH = "../aircraft_search_tool/js/chapters.json";
var CERT_DATA_PATH = "../aircraft_search_tool/js/certification.json";
var COND_DATA_PATH = "../aircraft_search_tool/js/condition.json";
var TT_DATA_PATH = "../aircraft_search_tool/js/tag_tooling.json";

var makeData;
var chapterData;
var certData;
var condData;
var ttData;

function fetchMakeData(type, callback) {
    if (makeData) {
        return callback(makeData);
    }

    $.getJSON(MAKE_DATA_PATH, function(json) {
        makeData = json;
        return callback(makeData);
    });
}

function fetchChapterData(type, callback) {
    if (chapterData) {
        return callback(chapterData);
    }

    $.getJSON(CHAPTER_DATA_PATH, function(json) {
        chapterData = json;
        return callback(chapterData);
    });
}

function fetchCertData(type, callback) {
    if (certData) {
        return callback(certData);
    }

    $.getJSON(CERT_DATA_PATH, function(json) {
        certData = json;
        return callback(certData);
    });
}

function fetchCondData(type, callback) {
    if (condData) {
        return callback(condData);
    }

    $.getJSON(COND_DATA_PATH, function(json) {
        condData = json;
        return callback(condData);
    });
}

submitFormPACT: function() {
        var a = this,
            b = $("#advanced_search_ct_parts")[0],
            c = b.action,
            d = b.pageId.value,
            f = b.moduleId.value,
            e = "?_nkw=",
            i = "";
        if ($(".myvddBox").is(":visible")) {
            var g = $(".myvddBox .selectBox-label")[0].innerHTML;
            "" != g && "Select a vehicle" != g && (e = e + g + " ")
        } else {
            g = a.ctpahelper.getMakeValue();
            "" != g && (e = e + g + " ");
            var h = a.ctpahelper.getModelValue();
            "" != h && (e = e + h + " ");
            var j = a.ctpahelper.getYearValue();
            "" != j && (e = e + j + " ");
            var k = a.ctpahelper.getVariantValueFind();
            "" != k && (e = e + k + " ", i = a.ctpahelper.getVariantValue(), i = "&selvel=" + encodeURI(g) + "~" + encodeURI(encodeURI(h)) + "~" + j + "~" + encodeURI(encodeURI(i)));
            g = a.ctpahelper.getTypeValue();
            "" != g && (i = i + "~" + a.ctpahelper.getTypeValue(), e = e + g + " ")
            if ($('#LH_BIN').is(':checked')) {
                i = i + "&LH_BIN=1";
            }
            if ($('#LH_ItemConditionNew').is(':checked')) {
                i = i + "&LH_ItemCondition=3";
            }
            if ($('#LH_PrefLoc').is(':checked')) {
                i = i + "&LH_PrefLoc=1";
            }
            if ($('#LH_FS').is(':checked')) {
                i = i + "&LH_FS=1";
            }
            if ($('#_sasltBus').is(':checked')) {
                i = i + "&LH_SellerType=2";
            }
        }
        g = b._rkw.value;
        "" != g && g != a.lookstrCT && (e += g);
        var l = c + e + i + "&_trksid=p" + d + ".m" + f;
        a.isSaveExplicit() ? a.handleAddVehicle(function(b) {
            b && a.gotoSRP(l)
        }) : a.gotoSRP(l);
        console.log("E", e, "G", g)
        return !1
    },


    // function fetchTtData(type, callback) {
    //     if (ttData) {
    //         return callback(ttData);
    //     }

    //     $.getJSON(TT_DATA_PATH, function(json) {
    //         ttData = json;
    //         return callback(ttData);
    //     });
    // }

    // // fetchTtData(function(TtData) {
    // //     var tag = []
    //     for (var i = 0; i < TtData.length; i++) {
    //         var tagData = TtData[i];
    //         var tag = [];

    //         for (var g = 0; g < tagData.length; g++) {
    //             var tagData = tagData;
    //             tagData.push({
    //                 "Oldest Tag Date": tagData.Oldest_Tag_Date,
    //                 "Rotable/Consumable/Tooling": tagData.Rotable_Consumable_ooling,
    //             })
    //         }
    //         tag.push({
    //             name: copy[tagData],
    //         })
    //     }
    //     document.getElementById(selector).innerHTML = template({
    //         tag: tagData,
    //     });
    // })

    fetchMakeData();
fetchChapterData();
fetchCertData();
fetchCondData();
fetchTtData();
