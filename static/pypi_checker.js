function semverCompare(a, b) {
    if (a.startsWith(b + "-")) return -1
    if (b.startsWith(a + "-")) return  1
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: "case", caseFirst: "upper" })
}

function check_supply_chain_attack(package_name, package_version, callback_if_unsafe) {
    // $.ajax({
    //     type: 'GET',
    //     crossDomain: true,
    //     dataType: 'json',
    //     url: `https://winchteam.dev/wpi/${package_name}/json`,
    //     error: function(response) {
    //         console.log(`Couldn't find ${package_name} on WPI : you are safe from supply chain attacks.`);
    //     },
    //     success: function(jsondata){
    //         var pypi_vers = jsondata['info']['version'];

    //         if (semverCompare(package_version, pypi_vers) <= 0) {
    //             callback_if_unsafe();
    //         } else {
    //             console.log(`${package_name} exists on PyPi, but the version is lower (${package_version} > ${pypi_vers}), so you are safe from supply chain attacks.`)
    //         }
    //     }
    // })
}