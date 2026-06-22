const fs = require('fs');
const path = require('path');
const https = require('https');

const screenshotsDir = path.join(__dirname, 'screenshots');
const htmlDir = path.join(__dirname, 'html');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}
if (!fs.existsSync(htmlDir)) {
  fs.mkdirSync(htmlDir, { recursive: true });
}

const files = [
  // Screenshots
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLszLjNUU-znL0fSGVTwu7lVTl6wvmairKB2BYvQ_lVdLE5Aa8sMzOp3gOUbzm1COCTyqBmjOLRlXw4FztPdFhX4zNSZ9kR3Mn12d5xbsu8oM2vMTCszsG3kxxWbYl05uz422Rj_FtycChhIY5LBG0uPck9tr31gBv4rUG4zug1WjQF0xPaTRxRe6DQzdaih2MoMKBCtRKpG7bO9_8wy_625bE8sTjCCWdtwBDvJNGOrp_DDyWxeslGCGA",
    dest: path.join(screenshotsDir, "01-ai-recipe-generator.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLuShDibd_9zydUs_9m1R7WE0q-APjtli2SEBi9VrhOr9oXTR1RlAmkqNHLRfuC5VN5CJ2ddeM06ASc9MQcGxUH2pr7GAvq_Gb37uM8N_Jt07U8NgWRzXD_JVZRaGwYZNxJnLh_fhq3czmXeJ4z9vH2o_jgOfz_j13oCwFt8o5MCchpHOGyrA1CLte_7bVnAES43dajYoHUUm1QyuhnPYmDEKjkQ8uyy7fQxUEfU_0wNcJ9KITsuUtiwMZo",
    dest: path.join(screenshotsDir, "02-my-account.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLtIdozXStRGwobHuKW8fr35ISgqMslbHFv45-JzTrIKTEtV5y-K7GCG5woQeLzhowMyBwcEX7uwyUshuFRxYf7pzZml1dX6NpyZicrCBW_O0qwODSBvv9gAd5ksk_PdECnvINISf-XdmjgxbPnDrWFLXWTed1cud6hD3exb7H2DreXkd-plKKNM6KNA9GjuobyAKPHMeA6QMJcWfBZzcaLhcqYIrcOg2zmpQ5-SWxSsaHxZbKTDaiQolVA",
    dest: path.join(screenshotsDir, "03-checkout.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLssoy_BGLoSOUGDCobSs2LTY65ALWvPehtH1jnYRuibjxvq9nXLktH40mveYjGCGbDN8t4-IBkTz6WSqJ3d4Q2eyDI6niYsr0eWxh_lc6w6cn5l_oON7dJT9OVpaQ7c95Nkm3ugT8Lh0QMpGxdSLaQuSPn9s4jELsa9KsMKiorC-V0_BfuzM5Peec3gCCKtxqenpeHuLhASb0qeUjCdolukFE5sVr14NpBpxXIyVmR3Ld4Mk0Y8hyOGvQ",
    dest: path.join(screenshotsDir, "04-our-story.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLuW9Z8znteDsiqQ8jWuR784gvlydHv0gX4INhoSesLcyKGvTwOEHeLrEOe9e4imfmuoMSf13W0W7s7C0gbNjuzAjSyCpMnqz6FjW5ZBRlRp6KaV7Wrrdi_z-d9I0CegaKcR9MDAA-eP8_5jInuYKf-51rjrpk_rYhAocKBhuyOHVuqQWbN7SB2oKCXI3f6QZ-lrtd6w2SKaE2HZmYwmbGfelbnifChYBfS9MMwZGTFuKdtVpaBmSt9IsME",
    dest: path.join(screenshotsDir, "05-login-signup.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLsK12bQrgzW3rb_WHGlLmBlcZmYrkbfaX5YQafkarEmczp6ZT_A8LCVWbffYt6eCdF3DMd_KCMy6NwMUkyFbpg2G0LVX3HTADeJmwwMnS6FxLLIZEOs8N_GMctMFN38wonuc2I5YnTPG-oo8ifzdax0gR8sG6yJ2yDZhzk8KsZnBygcM_R_KkOlBjNX1WSiCLG_gRI1tTHVpQpU8v60uFdZnu66haOQlXjFS-eJUjmRYiJfFoM2fFuKspo",
    dest: path.join(screenshotsDir, "06-order-history.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLt_FymKooOCZvXUFN043VQzBtQoT7wDmOwf6zkrXLSKlvIh6cNEyJiyR0HhAByGqS3VpB_3RW6gwvCDGzMyywVvVmp2cd-30t9JOPlyyIJc5NxzvTYAqFDsC8OUfg4PsRUWcRex4ufR9BEe-EWHvGfVf6kL9-sy_kgX-x5g90uEmzjaPQOB745Wlz8CVkJkx3OirmXIjF0ICKrPTzUjAwV3FrzzGxGWpwA8GBHifSM3Xg9s1kQ0pOuSqN0",
    dest: path.join(screenshotsDir, "07-product-details.png")
  },
  {
    url: "https://lh3.googleusercontent.com/aida/AP1WRLvNh9doEYIouxdaUyOH3EKNKZN0GjkaedOUHJ8jYyu04Oc7itnyosf54BWT0nBKM_p21HPLHwnYj4QxDVXYmqfmyhji_oQqrD-kUgPvvi2tDXmzigSDjKBovUsTpyp7l0GUInRIj67F7vnmXpHMfbdwppIhavxivwQ8CFmBPgJrrKgsaxmI_1e__m_8QyQ0waENMi3mFwZaL9tN1OgQ7bekP4DN7a2OME3l45cQDQOvJILGqyZM7XctsGk",
    dest: path.join(screenshotsDir, "08-shop-all-products.png")
  },
  // HTML Files
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcyNGIwNWM2MmRhZDQ0ODlhY2YwNmRhNTU1ZGQ3N2IyEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "01-ai-recipe-generator.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZkYzBjYzJmMGVlODQxM2FhMTI3NDRiMmFlYmMwM2U4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "02-my-account.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYzNWVmZjIxZThhMzRkNWE5ZWQ0YTkwYWVkNDU5MzEwEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "03-checkout.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZjNzYxMDkyZDVhZTQ3OGRhMTVlM2UwYmU2N2NmYTU4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "04-our-story.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAyNzc5OTU2Y2Q2NDQ3ZmFhMWU4NDA3ZGM1NDc0M2QzEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "05-login-signup.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YxNDE0ZjNiOWNhMjQ4ZDRhODI4NjJiMTRlZGFjYjY2EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "06-order-history.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY3ZGY0OTMzMTQ2MDQ4MzhhNjM3MjBiMjg4MDBmOWMxEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "07-product-details.html")
  },
  {
    url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY5ZTQ0OGVmODI4MTQzZjc4MjdmMmY1YzVlZDBjMzc4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086",
    dest: path.join(htmlDir, "08-shop-all-products.html")
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded: ${path.basename(dest)}`);
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log("Starting downloads...");
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`[${i+1}/${files.length}] Downloading ${path.basename(file.dest)}...`);
    try {
      await downloadFile(file.url, file.dest);
    } catch (e) {
      console.error(`Error downloading ${path.basename(file.dest)}:`, e.message);
    }
  }
  console.log("All downloads complete!");
}

run();
