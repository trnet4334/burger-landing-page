<template>
    <section id="contact">
        <div class="contact__container">
            <div class="contact__main">
                <div class="contact__main--map">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=1208%20e%20broadway%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://google-map-generator.com">google maps embed directions</a>
                        </div>
                    </div>
                </div>
                <div class="contact__main--info">
                    <div class="info__title">
                        <h2>CONTACT</h2>
                    </div>
                    <div class="info__content">
                        <div class="info__content--item flex--row">
                            <span>
                                <font-awesome-icon icon="map-pin"/>
                            </span>
                            <p>1208 E Broadway Rd, Tempe, AZ</p>
                        </div>
                        <div class="info__content--item flex--row">
                            <span>
                                <font-awesome-icon icon="clock"/>
                            </span>
                            <p>TUE-SUN: 12pm-11pm</p>
                        </div>
                        <div class="info__content--item flex--row">
                            <span>
                                <font-awesome-icon icon="phone-alt"/>
                            </span>
                            <p>480.666.8888</p>
                        </div>
                        <div class="info__content--message flex--row">
                            <span>
                                <font-awesome-icon icon="comment"/>
                            </span>
                            <div style="width: 100%">
                                <h4>MESSAGE US</h4>
                                <form id="message" @submit.prevent="onSubmitContactInfo">
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            v-model="info.fullName"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="Phone Number (+area code)"
                                            required
                                            v-model="info.phoneNum"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                            required
                                            v-model="info.email"
                                        />
                                    </p>
                                    <p>
                                        <textarea
                                            rows="4"
                                            placeholder="Message to us"
                                            required
                                            v-model="info.message"
                                        />
                                    </p>
                                    <button type="submit">
                                        <span>Send message</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            info: {
                fullName: '',
                phoneNum: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        // Submit customer request to db
        async onSubmitContactInfo () {
            const regexName = /^[a-zA-Z]{3,}(?: [a-zA-Z]*){0,2}$/g
            const regexPhoneNum = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})/g
            const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
            if (this.info.message === ''
                || regexName.test(this.info.fullName) === false
                || regexEmail.test(this.info.email) === false
                || regexPhoneNum.test(this.info.phoneNum) === false) {
                alert('Please make sure all your information is correct.')
            } else {
                await window.sessionStorage.setItem('customer_request', JSON.stringify(this.info))
                await this.$notify({
                    title: 'Success',
                    message: 'Thank you for your feedback! We will contact you as soon as possible.',
                    type: 'success',
                    showClose: false,
                    customClass: 'notification-class'
                })
                await setTimeout(() => {
                    this.$router.go(0)
                }, 2500)
            }
        }
    }
}
</script>
<style src="./Contact.scss" lang="scss" scoped/>
