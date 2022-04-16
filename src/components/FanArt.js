import React from 'react'
import Links from './Links'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const items = [
    ['CedrickCusay1', '1514509894413877248', 'FQSefJ4aMAERkH0'],

    ['annann_nna', '1514436317962117122', 'FQRbxKtVEAonvRT'],

    ['aielnq', '1514527637980401673', 'FQSu2-0VsAAWLnT'],

    ['jansuarts', '1514490550250254336', 'FQSMau6acAguD5d'],

    ['c_creationph', '1514483233647661059', 'FQSGdx-aMAcMycj'],

    ['Monosidofficial', '1514492125198516228', 'FQSOjOjVEAQrUCo'],
    
    ['MadamNFTs', '1514465848597295104', 'FQR2UkfagAMVF2-'],

    ['melow_neyd', '1514497253230084096', 'FQSTOZMUcAkxPL3'],

    ['kaistudioph', '1514479069156368390', 'FQR9pARakAAvpWj'],

    ['Cymaeri', '1514591272371392513', 'FQTou1taIAAg1vR'],

    ['vertfromageio', '1514321795012345861', 'FQPzWzkXIAY7eK5'],

    ['Mushruetato', '1514456915308277762', 'FQRuiHVVQAEczyE'],

    ['123_cranky', '1514463165647507456', 'FQR0Nh2VIAEJEh2'],

    ['YoshikoNeko1326', '1514318372535603201', 'FQPwiKhVgAE_qB5'],

    ['louietism_near', '1514428640599379973', 'FQRU0J-aAAQN9UI'],

    ['liliacia_neAr', '1514473803421679616', 'FQR95afVEAQW2xH'],

    ['stare_up', '1514288430846726144', 'FQPVTSOacAUKR9H'],

    ['torresjoyy', '1514515453720219657', 'FQSjxxsUcAE8PCF'],

    ['StarArt123', '1514398370252480514', 'FQQ5SpyVQAACFea'],

    ['portzdraw', '1514515717185413120', 'FQSj_i1aMAE91Ah'],

    ['jayloren_near', '1514394197977034752', 'FQQ1fS2VUAkxmvp'],

    ['rylereve', '1514616839824764931', 'FQT_-lWVQAAu8PI'],

    ['jovi_sprksntp', '1514652112046596123', 'FQUgD8sVUAEFcxX'],

    ['CarlCarlKarl', '1514657540830732304', 'FQUlAAUVIBMMhw2'],

    ['Krizzybellss', '1514662902678290437', 'FQUp4ISacAEQqQz'],

    ['iron_oxide2000', '1514658602035789824', 'FQUl-I4VIBImaWP'],

    ['pemmieeartz', '1514650441186877463', 'FQUejFuVIAcurjS'],

    ['encrypt_n', '1514605623237046278', 'FQT1gUCaAAUntSI'],

    ['jerccorpz', '1514281360575197186', 'FQPO1QqVUAAEjuI'],

    ['emilartaddicted', '1514764492164714496', 'FQWGRuQaUAACx0b'],

    ['kensley_near', '1514634576341377024', 'FQUQGH3agAAsDvK'],

    ['elvatar02', '1514624433348280325', 'FQUG5JTacAIOVSY'],

    ['exintrovert2', '1514198507103539200', 'FQODgx2VIAULyaS'],

    ['K1r4Grfx', '1514704269056045056', 'FQVPf5-aUAAZq7j'],

    ['oneiro_art', '1514507171379113986', 'FQSa5_RVUAIRJ11'],

    ['nateriverThirdL', '1514485445601935362', 'FQSIejiacAAgJE4'],

    ['Oisonine1Near', '1514490972343660552', 'FQSNbdrVkAcGwGD'],

    ['Miki_iel', '1514599552426573828', 'FQTwQenaQAIwMCF'],

    ['dalomhash', '1514592162490449923', 'FQTpb9SUYAk3Vz_'],

    ['Trystinee', '1514258943610355716', 'FQO6e3LakAICIWe'],

    ['ZyberionWRLD', '1514293347220811776', 'FQPZxhBVgAEVMFB'],

    ['JamesBago_', '1514636877638565888', 'FQUR2mLacAARmNS'],

    ['kyranear', '1514457804840796165', 'FQRvMFRaQAAtmD9'],

    ['Violet_Spades30', '1514611710052626437', 'FQT7T28VsAAxnfb'],
  
    ['lunexis_near', '1514427153470812168', 'FQRTdgvVQAAdf54'],
    ['GingerGlen_23', '1514512677267132426',  'FQSgU3sVQAUrZSt'],
]

function FanArt() {
    return (
        <>
            <Links />
            <h1>Fan Art</h1>
            <Grid container             
            spacing={{
                xs: 3,
                sm: 2,
            }}
            sx={{ 
                p: 3,
                mt: 5,
            }}>
            {items.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                  <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <a target="_blank" style={{ display: 'block'}} href={`https://twitter.com/${item[0]}/status/${item[1]}`} rel="_noopener">
                    <img style={{padding: '5px', width: '100%'}} src={`https://pbs.twimg.com/media/${item[2]}?format=jpg&name=small`} />
                </a>
                <Typography gutterBottom variant="h5" component="h2">
                    by @{item[0]}
                </Typography>
                </Card>
              </Grid>
            ))}
            </Grid>
        </>
    )
}

export default FanArt