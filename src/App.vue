<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-block d-lg-none"><img src="./assets/profile.jpg" class="img-fluid img-profile rounded-circle mx-auto" style="max-height:1.5em;"></span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#photography">Photography</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Say Hello!</a>
          </li>
          <li class="nav-item">
            <br>
            <a class="nav-link js-scroll-trigger" href="https://cal.berkeley.edu/kevinkao" target="_blank"><img src="/static/calbear.png" style="max-width:25%; max-height:25%;"></a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">
            {{ name }}
            <span class="text-primary" style="color:#2471A3">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5" style="margin-top:5px;">{{ address }}
            <a href="#" v-clipboard:copy="copyEmail" data-toggle="tooltip" data-placement="right" title="Copy to clipboard" id="copy-email">{{ email }}</a>
            <sub id="hidden-clipboard">Copy Email to Clipboard</sub>
          </div>
          <p>{{ aboutMe }}</p>
          <p class="mb-5">{{ miscBlurb }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/kevin-kao/" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/kaokevin" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.medium.com/@kevinkao" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fab fa-medium fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Resume</h2>
          <hr>
          <div class="resume-item d-flex flex-column flex-md-row mb-5 side-deco">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">University of California, Berkeley</h3>
              <div class="subheading mb-3">Bachelor of Science, EECS</div>
              <div>
                Regents and Chancellor's Award<br>
                Dean's Honor<br>
                Engineering Honor Roll<br>
              </div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2012 - May 2016</span>
            </div>
          </div>

          <hr>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="gold-hover mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="photography">
        <div class="my-auto">
          <h2 class="mb-5">Photography</h2>

          <p>A sample of my photography is shared below.</p>
          <div class="slider">
            <img class="sample-photo" src="/static/photography/banff1.jpg">
            <img class="sample-photo" src="/static/photography/banff2.jpg">
          </div>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
        <div class="my-auto">
          <h2 class="mb-5">Contact Me</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <div class="subheading mb-3">Reach out to me on <a href="https://www.linkedin.com/in/kevin-kao/" target="_blank">LinkedIn</a>, or fill out the form below to say hello!
              </div>
              <div>
                <form id="google-form" class="needs-validation" novalidate>
                  <div class="form-group">
                    <label for="name-input">Full name</label>
                    <input type="text" class="form-control" id="name-input" required>
                    <div class="invalid-feedback">
                      Please provide your full name.
                    </div>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email-address-input">Email</label>
                    <input type="email" class="form-control" id="email-address-input" required>
                    <div class="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="company-input">Company</label>
                    <input type="text" class="form-control" id="company-input">
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email-message-input">Message</label>
                    <textarea class="form-control" id="email-message-input" rows="5" required></textarea>
                    <div class="invalid-feedback">
                      Please provide a message.
                    </div>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <button type="submit" id="submit-form" class="btn btn-primary" >Submit</button>
                </form>
              </div>
              <br>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'My Portfolio',
      name: 'Kevin',
      surname: '[Kao]',
      address: 'San Francisco Bay Area ·',
      copyEmail: 'kkao@berkeley.edu',
      email: 'kkao@berkeley/edu',
      aboutMe: 'UC Berkeley \'16 EECS graduate + Senior Staff SWE @LinkedIn, tackling applied machine learning and scalable infrastructure problems. Got a challenging ML or algorithms problem? I\'d be happy to chat about it over some coffee.',
      miscBlurb: 'Apart from being a software engineer, I enjoy spending time outdoors and staying active, whether it be hiking the nearby trails or bouldering at the local gym. I\'m an avid photographer, a huge dog lover, and a coffee enthusiast.',
      experience: [
        {
          position: 'Senior Staff Software Engineer',
          company: 'LinkedIn',
          description: 'Technical lead within the Careers Foundations org at LinkedIn. I focus on ML and search infrastructure for LinkedIn Jobs, supporting our recommendations and search use cases. Multiple patents filed.',
          startDate: 'June 2016',
          endDate: 'Present'
        },
        {
          position: 'Undergraduate Researcher',
          company: 'UC Berkeley School of Information',
          description: 'Developer of the research platform moocRP, under the guidance of Professor Zachary Pardos. Published research at the Learning@Scale conference in 2015.',
          startDate: 'February 2014',
          endDate: 'May 2016'
        },
        {
          position: 'Software Engineer Intern',
          company: 'LinkedIn',
          description: 'Developed LinkedIn\'s first search snippets model and infrastructure for Careers Search. Stayed on for the duration of my senior year of college as a SWE contractor to work on snippets infrastructure. Filed two patents for search snippets generation!',
          startDate: 'June 2015',
          endDate: 'April 2016'
        },
        {
          position: 'Software Engineer Intern, Systems',
          company: 'LogicBlox',
          description: 'Solving graph algorithms problems, working directly on the LogicBlox database engine. Worked with Python, C++, and Datalog.',
          startDate: 'August 2014',
          endDate: 'January 2015'
        },
        {
          position: 'Software Engineer Intern, Platform',
          company: 'AutoGrid',
          description: 'A little bit of everything for the foundational infra and services of the Demand Response Optimization and Management System product, helping architect a data ETL pipeline and solution. Required some Java chops with some dabbling in Ruby on Rails, Hadoop, MySQL, Redis, RabbitMQ, and Python.',
          startDate: 'June 2014',
          endDate: 'August 2014'
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })

      $('#copy-email').click(function () {
        $('#hidden-clipboard').html('<i class="fas fa-envelope"></i> <b>Copied</b> (click to copy again)')
      })

      $('#google-form').submit(function (event) {
        if ($('#google-form')[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          $('#google-form').addClass('was-validated')
        } else {
          var nameField = $('#name-input').val()
          var companyField = $('#company-input').val()
          var messageField = $('#email-message-input').val()
          var emailField = $('#email-address-input').val()
          $('#google-form').addClass('was-validated')

          $.ajax({
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSeOr545Ao4QxIdcaF3JyBEavb6ycGEdUNHF8Yu5_7uNRUeZoQ/formResponse',
            data: {
              'entry.869902036': nameField,
              'entry.552149804': emailField,
              'entry.754332831': companyField,
              'entry.1043041612': messageField
            },
            type: 'POST',
            dataType: 'xml',
            statusCode: {
              0: function () {
                // Success message. Currently, due to CORS/CORB, success will still result in this.
                console.log('0')
              },
              200: function () {
                // Success Message
                console.log('200')
              }
            }
          })
          resetForm()
          return false
        }
      })

      function resetForm () {
        $('#google-form').html('<div class="message-box">Thanks for dropping a message! I will respond if needed. <br>If it is urgent and I do not respond, drop me an email (see <b><a class="js-scroll-trigger" href="#about">About</a></b>).</div>')
      }
    })
  }
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.css";

#copy-email {
  text-decoration: none;
  padding-top: -3px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  border-left: 1px white solid;
  border-right: 1px white solid;
}

#copy-email:hover {
  color: #223941;
  border-left: 1px gold solid;
  border-right: 1px gold solid;
  animation: flash-copy-email 0.5s;
  text-decoration: underline dashed;
}

@keyframes flash-copy-email {
  0% {
    color: #223941;
  }
  50% {
    color: gold;
  }
  100% {
    color: #223941;
  }
}

.message-box {
  border: 1px solid #223941;
  padding: 5px;
  border-radius: 8px;
  font-size: 1.2rem;
}

form {
  font-family: 'Saira Extra Condensed', serif;
  text-transform: uppercase;
}

.btn-primary {
  background-color: #223941;
  border-color: #223941;
  -moz-transition: all .1s ease-in;
  -o-transition: all .1s ease-in;
  -webkit-transition: all .1s ease-in;
  transition: all .1s ease-in;
}

.btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active {
  background-color: gold;
  color: #223941;
}

#hidden-clipboard {
  display: none;
  font-size: 0.5em;
  color: #223941;
}

#copy-email:hover + #hidden-clipboard {
  display: inline;
  border: 1px dotted;
  border-color: gold;
  padding: 0px 3px;
}

.sample-photo {
  max-width: 50%;
  max-height: 200px;
  padding: 2px;
}

body {
  font-family: 'Open Sans', serif;
  padding-top: 54px;
  color: #868e96;
}
@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}
h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}
h2 {
  font-size: 3.5rem;
}
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', serif;
  font-size: 1.35rem;
}
.list-social-icons a {
  color: #495057;
}
.list-social-icons a:hover {
  color: #223941;
}
.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}
.list-icons {
  font-size: 3rem;
}
.list-icons .list-inline-item i:hover {
  color: #223941;
}
#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}
@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}
section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}
section.resume-section .resume-item .resume-date {
  min-width: none;
}
@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}
@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
.bg-primary {
  background-color: #223941 !important;
}
.text-primary {
  color: #223941 !important;
}
a {
  color: #223941;
}
a:hover, a:focus, a:active {
  color: #824027;
}
</style>



// WEBPACK FOOTER //
// src/App.vue
