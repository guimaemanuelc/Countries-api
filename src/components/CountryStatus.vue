<template>
  <div class="[ status-container ]">
    <img :src="flags">
    <div class="[ status-geral ]">
        <h1>{{ country.name.common }} </h1>   
        <div class="[ infos ]">
            <div class="[ info-left ] ">
                <p><span>Native Name: </span>{{ country.name.official }}</p>
                <p><span>Population: </span> {{ country.population }}</p>
                <p><span>Region: </span>{{ country.region }}</p>
                <p><span>Sub Region: </span>{{ country.subregion }}</p>
                <p><span>Capital: </span>{{ country.capital[0] }}</p>
            </div>

            <div class="[ info-right ]">
                <p><span>Top Level Domain: </span>{{ tld }}</p>
                <p><span>Currencies: </span>
                    <span class="[ noBold ]" v-for="(currency, index) in currencies" :key="index">{{ currency.name }}</span>
                </p>
                <p><span>Languages: </span>
                    <span class="[ noBold ]" v-for="(language, index) in languages" :key="index">{{ language }}, </span>
                </p>
            </div>
        </div>

        <div class="[ border-country ]">
            <span>Border Countries:</span>
            <span class="[ borders ][ noBold ]" v-for="(border, index) in borders" :key="index">{{ border }} </span>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    name: 'CountryStatus',
    props: {
        country: {},
        languages: {},
        currencies: {},
        flags: {},
        nativeName: {},
        borders: [],
        tld: []
    },
}
</script>

<style lang="scss" scoped>
    .status-container {
        display: flex;
        margin-left: 80px;
        height: auto;
        padding-bottom: 160px;
       

        img {
            width: 520px;
            height: 380px;
            -webkit-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            -moz-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
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
                width: 600px;
                display: flex;
                justify-content: space-between;
                

                p {
                    margin-bottom: 15px;
                }

                .info-left {
                    padding-right: 50px;
                }
            }
            
            .border-country {
                margin-top: 30px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
            }

            .noBold {
                font-weight: normal;
            }

            .borders {
                padding: 3px 12px;
                border-radius: 5px;
                background: var(--very-light-gray);
                color: var(--very-dark-blue-text);
                -webkit-box-shadow: -1px -1px 18px -4px rgba(0,0,0,0.45);
                -moz-box-shadow: -1px -1px 18px -4px rgba(0,0,0,0.45);
                box-shadow: -1px -1px 18px -4px rgba(0,0,0,0.45);
            }          
        }

    @media only screen and (max-width: 1400px) {
        .status-geral {
            margin-left: 30px;
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
        margin-left: 20px;

        img {
            width: 450px;
            height: 250px;
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

        .infos {
            font-size: 15px;
        }
    }
}
</style>