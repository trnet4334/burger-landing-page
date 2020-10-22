<template>
    <section id="subscribe">
        <div class="subscribe__container">
            <div class="subscribe__main">
                <div style="z-index: 2">
                    <div class="subscribe__main--title">
                        <div class="main__title--icon">
                            <figure>
                                <font-awesome-icon icon="star" size="2x"/>
                            </figure>
                            <figure>
                                <font-awesome-icon icon="star" size="3x"/>
                            </figure>
                            <figure>
                                <font-awesome-icon icon="star" size="2x"/>
                            </figure>
                        </div>
                        <h2>JOIN OUR MAILING LIST</h2>
                    </div>
                    <div class="subscribe__main--form flex--col flex--center">
                        <p>
                            Subscribe our newsletter for the special events and promotions before we announce them anywhere else!
                        </p>
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                v-model="email"
                                name="EMAIL"
                            />
                            <button @click="onSubmit">
                                <span>SUBSCRIBE</span>
                            </button>
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
            email: ''
        }
    },
    methods: {
        async onSubmit () {
            const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
            if (this.email === '' || regex.test(this.email) === false) {
                alert('Please type in a correct email address.')
            } else {
                await window.sessionStorage.setItem('email', this.email)
                await this.$notify({
                    title: 'Success',
                    message: 'Thank you for your subscription! We are looking forward to see you soon.',
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
<style src="./Subscribe.scss" lang="scss" scoped/>
