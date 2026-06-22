$screenshotsDir = "d:\Codes\TBI-GEU\HimShakti\himshakti-d2c\stitch-screens\screenshots"
$htmlDir = "d:\Codes\TBI-GEU\HimShakti\himshakti-d2c\stitch-screens\html"

if (!(Test-Path $screenshotsDir)) {
    New-Item -ItemType Directory -Force -Path $screenshotsDir | Out-Null
}
if (!(Test-Path $htmlDir)) {
    New-Item -ItemType Directory -Force -Path $htmlDir | Out-Null
}

$files = @(
    # Screenshots
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLszLjNUU-znL0fSGVTwu7lVTl6wvmairKB2BYvQ_lVdLE5Aa8sMzOp3gOUbzm1COCTyqBmjOLRlXw4FztPdFhX4zNSZ9kR3Mn12d5xbsu8oM2vMTCszsG3kxxWbYl05uz422Rj_FtycChhIY5LBG0uPck9tr31gBv4rUG4zug1WjQF0xPaTRxRe6DQzdaih2MoMKBCtRKpG7bO9_8wy_625bE8sTjCCWdtwBDvJNGOrp_DDyWxeslGCGA"; Dest = "$screenshotsDir\01-ai-recipe-generator.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLuShDibd_9zydUs_9m1R7WE0q-APjtli2SEBi9VrhOr9oXTR1RlAmkqNHLRfuC5VN5CJ2ddeM06ASc9MQcGxUH2pr7GAvq_Gb37uM8N_Jt07U8NgWRzXD_JVZRaGwYZNxJnLh_fhq3czmXeJ4z9vH2o_jgOfz_j13oCwFt8o5MCchpHOGyrA1CLte_7bVnAES43dajYoHUUm1QyuhnPYmDEKjkQ8uyy7fQxUEfU_0wNcJ9KITsuUtiwMZo"; Dest = "$screenshotsDir\02-my-account.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLtIdozXStRGwobHuKW8fr35ISgqMslbHFv45-JzTrIKTEtV5y-K7GCG5woQeLzhowMyBwcEX7uwyUshuFRxYf7pzZml1dX6NpyZicrCBW_O0qwODSBvv9gAd5ksk_PdECnvINISf-XdmjgxbPnDrWFLXWTed1cud6hD3exb7H2DreXkd-plKKNM6KNA9GjuobyAKPHMeA6QMJcWfBZzcaLhcqYIrcOg2zmpQ5-SWxSsaHxZbKTDaiQolVA"; Dest = "$screenshotsDir\03-checkout.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLssoy_BGLoSOUGDCobSs2LTY65ALWvPehtH1jnYRuibjxvq9nXLktH40mveYjGCGbDN8t4-IBkTz6WSqJ3d4Q2eyDI6niYsr0eWxh_lc6w6cn5l_oON7dJT9OVpaQ7c95Nkm3ugT8Lh0QMpGxdSLaQuSPn9s4jELsa9KsMKiorC-V0_BfuzM5Peec3gCCKtxqenpeHuLhASb0qeUjCdolukFE5sVr14NpBpxXIyVmR3Ld4Mk0Y8hyOGvQ"; Dest = "$screenshotsDir\04-our-story.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLuW9Z8znteDsiqQ8jWuR784gvlydHv0gX4INhoSesLcyKGvTwOEHeLrEOe9e4imfmuoMSf13W0W7s7C0gbNjuzAjSyCpMnqz6FjW5ZBRlRp6KaV7Wrrdi_z-d9I0CegaKcR9MDAA-eP8_5jInuYKf-51rjrpk_rYhAocKBhuyOHVuqQWbN7SB2oKCXI3f6QZ-lrtd6w2SKaE2HZmYwmbGfelbnifChYBfS9MMwZGTFuKdtVpaBmSt9IsME"; Dest = "$screenshotsDir\05-login-signup.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLsK12bQrgzW3rb_WHGlLmBlcZmYrkbfaX5YQafkarEmczp6ZT_A8LCVWbffYt6eCdF3DMd_KCMy6NwMUkyFbpg2G0LVX3HTADeJmwwMnS6FxLLIZEOs8N_GMctMFN38wonuc2I5YnTPG-oo8ifzdax0gR8sG6yJ2yDZhzk8KsZnBygcM_R_KkOlBjNX1WSiCLG_gRI1tTHVpQpU8v60uFdZnu66haOQlXjFS-eJUjmRYiJfFoM2fFuKspo"; Dest = "$screenshotsDir\06-order-history.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLt_FymKooOCZvXUFN043VQzBtQoT7wDmOwf6zkrXLSKlvIh6cNEyJiyR0HhAByGqS3VpB_3RW6gwvCDGzMyywVvVmp2cd-30t9JOPlyyIJc5NxzvTYAqFDsC8OUfg4PsRUWcRex4ufR9BEe-EWHvGfVf6kL9-sy_kgX-x5g90uEmzjaPQOB745Wlz8CVkJkx3OirmXIjF0ICKrPTzUjAwV3FrzzGxGWpwA8GBHifSM3Xg9s1kQ0pOuSqN0"; Dest = "$screenshotsDir\07-product-details.png" },
    @{ Url = "https://lh3.googleusercontent.com/aida/AP1WRLvNh9doEYIouxdaUyOH3EKNKZN0GjkaedOUHJ8jYyu04Oc7itnyosf54BWT0nBKM_p21HPLHwnYj4QxDVXYmqfmyhji_oQqrD-kUgPvvi2tDXmzigSDjKBovUsTpyp7l0GUInRIj67F7vnmXpHMfbdwppIhavxivwQ8CFmBPgJrrKgsaxmI_1e__m_8QyQ0waENMi3mFwZaL9tN1OgQ7bekP4DN7a2OME3l45cQDQOvJILGqyZM7XctsGk"; Dest = "$screenshotsDir\08-shop-all-products.png" },
    # HTML Files
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcyNGIwNWM2MmRhZDQ0ODlhY2YwNmRhNTU1ZGQ3N2IyEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\01-ai-recipe-generator.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZkYzBjYzJmMGVlODQxM2FhMTI3NDRiMmFlYmMwM2U4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\02-my-account.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYzNWVmZjIxZThhMzRkNWE5ZWQ0YTkwYWVkNDU5MzEwEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\03-checkout.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZjNzYxMDkyZDVhZTQ3OGRhMTVlM2UwYmU2N2NmYTU4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\04-our-story.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAyNzc5OTU2Y2Q2NDQ3ZmFhMWU4NDA3ZGM1NDc0M2QzEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\05-login-signup.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YxNDE0ZjNiOWNhMjQ4ZDRhODI4NjJiMTRlZGFjYjY2EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\06-order-history.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY3ZGY0OTMzMTQ2MDQ4MzhhNjM3MjBiMjg4MDBmOWMxEgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\07-product-details.html" },
    @{ Url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY5ZTQ0OGVmODI4MTQzZjc4MjdmMmY1YzVlZDBjMzc4EgsSBxDxn-XnnhQYAZIBIwoKcHJvamVjdF9pZBIVQhM1MzI0NzkzMTQyNDQxMTcwMDAx&filename=&opi=89354086"; Dest = "$htmlDir\08-shop-all-products.html" }
)

Write-Host "Starting downloads via PowerShell..."
$i = 1
foreach ($file in $files) {
    $name = Split-Path $file.Dest -Leaf
    Write-Host "[$i/$($files.Count)] Downloading $name..."
    try {
        Invoke-WebRequest -Uri $file.Url -OutFile $file.Dest -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -ErrorAction Stop
        Write-Host "Successfully downloaded $name"
    } catch {
        Write-Error "Failed to download $name: $_"
    }
    $i++
}
Write-Host "All downloads complete!"
