window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});


// the image id's are generated froma script in my google drive- see below

const imageIds = ["1ZuAgadjSHG9Sp-xQKnRU-q91aARoCBJk", "1OrJGx8k2tGQdqxPNsYcaGEg0QgxNtkLn", "1XdA_NUnukL_CWVQroZrSQGI7_k9wfmlA", "1BlNXr8CP8PIP8Hj9GblkE74P_DQ-seIE", "17zjY3csTUM-_sHcOopNUDopNvHNU69J7", "14Q66uElc8gYte0Px3xMGdvW6qoNj3dHs", "1qbZ02ETFoRfv_FvF9RaltnuOHoavmvPt", "1F_8wqoGfD6VgMmKeXfCPVkyS_ZPOCRwp", "1tdoV26gX7_TpK0gvMBIb5mxjQsenE_69", "1R_kzffuirO4PHuokHlm_qYr7qpKPlf46", "1hcviIudYEXi25NiohMttYMpT-Caz7uAG", "1bgtLnH8HA0hSJUXb8YJlQnfyegPuYpki", "1JDzysw8e8qMT-wP22ta8PEBeD_6fiB3n", "1mu3b6IxIoBsfzVrvhJuG_R8deTj3Y31S", "1AnTREmLalRNelxBH12qXFEZyskDH7OCe", "1MIonOhfzkq0vkxOXLxU4HahycpvGGMgF", "1wKjN1NUVxjzm2-oe54GwhE0zPQb6ZTjC", "1LoPPuCt6r8KygXXBEbAcgGTuxp4HEcae", "1UXECku-66AfDIkzUzgs2FRbCl7xLt0eq", "1_2Nkawo_0-7tb2_0fSOPFgajdt0tCWji", "1i19XmRh7x0zCYtjkl0SQbk4R3l1w7C7n", "1UP_XiqK0NTWaDda8omdOOowjVmWj8A4y", "1JFcrluHlcoRpRDP30gh4EYfflS-xPv5C", "1GUZGbPHGFc1bxHtKTeNed4K5kW3eNGeu", "1iKbyYSMtniZG1XJzJnErigK1wI78pxaq", "12pSsszuJlkpQRGzz7YYCCpXLa2Es6Q9J", "19NU6_JSp9cy-B7-tNFQC7t49WDgRR3N_", "14Mu2DrKyQIUsZpF4Nih70neEDvtp4LV_", "1N4VAfggBr8ofWW7E61sV50rawZn72oP9", "1k49XYEWDdTl6_24zkddSYbAcMVHVP96k", "1PK6Q96ZEvw5RYAm_c4CA-bX7pplH-K3b", "1Uj8ieng3NvY-LcUuX3CYVsjSCyB0sQNk", "16r5IOMdjqoGtJeeoId8TPl7yHnoaFfz2", "1A4riKEiPSaobx2z2mpbH2dK7M_QiKPy-", "1nmnB6hgT0xKUKFSC0BcfFcP-KTharoI4", "1ZQRJkERxcFeayNjFGe3x38Nd5D11o6e6", "1-4Qw5nWfTD_i7ElppAfPHY_N0CAe29Wa", "10d-cXZ_9ItCYMVY8BZ0HXS6IFHsFSJKa", "1XJVgaEt_C2-nxWBKk4wp4PcJWLssnje0", "15efjwYbOWCrQ6TkCT2Fo6DPMspTU4z46", "1WogGKVMzk0cRnjNjM931tkB37SIqYJjM", "1D9S2tA_A_Tt-O4uLcJ4euMTTGJJt-9jw", "18tU7SAij07iI0EYfkZ5Ua_FEwp-qeyYX", "1Dgd2rZ2FKFgY42IqcDd75ZzU41DfdTnF", "1m-cV2_c1rUeRm7ISP30wyLoaRq3oxMYE", "1bTE1qckSqf8uN13pJ7CawfZdEeurtubw", "1XNThPCZHc9GJq91dwuKwl9mL-3VQDNl6", "1tLN98KY22cfLyhNOAbmc0P-cFAU7JdtT", "1gww-NuPQBlk1Itje8Kx2ctoGv2MRGUAI", "12ksupYsWSnkjHT05B7g2vNtknw3pWVmy", "1qFdhAu_CoyEJoEZlH3FKPBnbX7xF74qB", "1aa3m2zu6aE03THcXO0uXOffQp1C3fNl4", "1wXT86-DboKXIp4RVcaSQOKjABN9euhye", "1SJojpj0qUmgp7uvWSKHW09SiCPfxJzPJ", "1PBTbhzYQu3tq2Txvk179zeBkXc9OsNk6", "1L9mkQkykuBP5Tu81-ZVwGgwklaulVvEx", "17PNxjGyjSzrlzwNL2jCKnXpb-O9iyRJS", "1w6j5b1FQGWMvq251gymcxIU_5ImRTOrP", "1zsVOQ7gn1RQsAfJaBL7N6febcu_2tdDn", "1AulCbAm4VsSe-QApehXRvFrDh1SiuwXO", "1ZMnfqr_OI7DTK-u_jH2JvLzIJvNCuP66", "1IhHYceZLtNUm4YqSZgk5AcfSxgz_JZSb", "1KSz0y5Z5-o9K7PDzIc4ibjbI-_vqVt0q", "1NiSS349O1qBgiOEPLug1ujCv0uvvlm9R", "1EDKHArbLYv5CZ5mZHzRwFDpF2FNyvHML", "1SM-KDSQIPvUEB2PxjKTJR2zOI9YhI5A8", "1UvuaJC1n9xYEX_B2nTTa43ixnoTdOIAm", "10HyiQIYyZzHK6KwE-Kp7fCq0BfRLuNeX", "1GqpckTHlDY-sq5reml3rKAo-QgAMCd3F", "1qcMINvDukaXC2nv14Sm3mrf8opbiFipp", "1WcIUMib_pdyTP2j6uf-BoqdleY3TI0mZ", "1ZCmegW2pkDbybEl88Syn2w66NTEcwH5I", "13J3lvdC7YpsxUC4MmCkWj2CBRvdIUM9I", "1m6zql9DWvxm53dNLElOhQ6G3e3fJWJ4P", "13N91p_gpQ8431IROuram0iMaX8YLPIUx", "1x-zlPfjxjWKTQQhHQ10a1DyMYr6b5wat", "1HUiFejdGg6Ul-sKqDNvDmeC7bB3N6bo7", "1Y0-bbNE8404Bm0hLnhIMJ3QMXzabXZ1H", "1rb9W245CcPpl7rvd0Zd6Jo3k8F86aMTG", "1Y0YcJuo-3wNhCOtZqXWKG48WOFXl1MuG", "1WDxiAMOkP2YJQQJ_K6hVjhyLD4n9234T", "1tp1tVh7vx_siJAHqD0abbGLcLakLncsK", "14pATKpWBeGIiQHrfZpKyxzeY8gQTOMML", "1ajCAlwgXLpyjO6Y-VhGxK09wxISX9pz6", "112Bazz6Lzco8UdGPVSud03GK_5OUZHbD", "1DZh4QURdj--LebIuSGI8la0uaOiLYX9b", "1Ao4TbjWs163prl84T5-_vwmHD9ruJ5Zk", "1Kng0YyFSDrODSsE2a4w4TPQ0FHdIjIQ5", "1aVLW9Pn3j5Rl0uXqJYLgNj0_P6EziH8Z"];

// google apps script to get the id's

// function listImageIdsInFolder() {
//   var folderId = '1zBxEFm_sw47BUX2AyT-G-NSAgvcKtcjM';
//   var folder = DriveApp.getFolderById(folderId);
//   var files = folder.getFiles();
//   var imageIds = [];
  
//   while (files.hasNext()) {
//     var file = files.next();
//     if (file.getMimeType().indexOf('image/') !== -1) {
//       imageIds.push('"' + file.getId() + '"');
//     }
//   }
  
//   Logger.log(imageIds);
// }


// Loop through the imageIds and append only the first 15 images
let imagesShown = 0;
imageIds.forEach((imageId, index) => {
  if (index < 15) {
    const imgTag = document.createElement("img");
    imgTag.src = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
    document.querySelector(".photoGallery").appendChild(imgTag);
    imagesShown++;
  }
});

// Add an event listener to the "Show All" button
document.querySelector(".show-all-button").addEventListener("click", () => {
  // Append the rest of the images that were not initially shown
  imageIds.slice(imagesShown).forEach(imageId => {
    const imgTag = document.createElement("img");
    imgTag.src = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
    document.querySelector(".photoGallery").appendChild(imgTag);
  });

  // Hide the "Show All" button
  document.querySelector(".show-all-button").style.display = "none";
});






// Add an event listener to each image in the gallery
const images = document.querySelectorAll(".photoGallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
  });
});

// Close the modal when the close button is clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});