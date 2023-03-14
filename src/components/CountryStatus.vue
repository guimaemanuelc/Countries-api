<template>
  <div class="[ status-container ]">
    <img :src="country.flag">
    <div class="[ status-geral ]">
        <h1>{{ country.name.official }} </h1>
        <div class="[ infos ]">
            <div class="[ info-left ] ">
                <p><span>Native Name:</span>{{ country.nativeName }}</p>
                <p><span>Population: </span> {{ country.population }}</p>
                <p><span>Region: </span>{{ country.region }}</p>
                <p><span>Sub Region: </span>{{ country.subregion }}</p>
                <p><span>Capital: </span>{{ country.capital[0] }}</p>
            </div>
            <div class="[ info-right ]">
                <p><span>Top Level Domain: </span></p>
                <p><span>Currencies: </span></p>
                <p><span>Languages: </span>{{ country.languages }}</p>
            </div>
        </div>
        <div class="[ border-country ]">
            <span>Border Countries: </span>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    name: 'CountryStatus',
    props: {
        country: {}
    }
}
</script>

<style lang="scss" scoped>
    .status-container {
        display: flex;
        margin-left: 90px;

        padding-bottom: 82px;

        img {
            width: 600px;
            height: 450px;
        }
        
        .status-geral {
            margin-left: 120px;
            margin-top: 50px;

            h1 {
                margin-bottom: 20px;
                font-size: 2rem;
                font-weight: bold;
            }

            span {
                font-weight: bold;
            }

            .infos {
                width: 570px;
                display: flex;
                justify-content: space-between;

                p {
                    margin-bottom: 15px;
                }

                .info-left {
                    margin-right: 50px;
                }
            }
            
            .border-country {
                margin-top: 20px;
            }
        }

        @media only screen and (max-width: 1400px) {
            .status-geral {
                margin-left: 20px;
            }
        }

        @media only screen and (max-width: 1300px) {
            flex-direction: column;

            .status-geral {
                margin-left: 0px;
            }

            img {
                width: 700px;
            }
        }

        @media only screen and (max-width: 900px) {
            img {
                width: 580px;
            }

            .infos {
                flex-direction: column;
                gap: 30px;
            }
    }

    @media only screen and (max-width: 750px) {
        margin-left: 25px;

        img {
            width: 450px;
            height: 300px;
        }
    }

    @media only screen and (max-width: 525px) {

        img {
            width: 420px;
        }
    }

    @media only screen and (max-width: 430px) {
        img {
            width: 350px;
        }
    }
}
</style>