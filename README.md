<h1>Come To Cork</h1>

I had the challenge of developing a dynamic front end project, with custom written Javascript, HTML and CSS code and cosisting of one or more HTML pages.
I have created a made up tourism site for domestic and international tourists planning a trip to Cork, Ireland. This website will use the Google maps API, so users can interact with the site and have a better understanding of where things are located.
I also implemented a corona virus API, which allows potential visitors to get a live update on the number of cases and deaths in Ireland due to covid-19. This will allow users to make an informed decision on whether it is safe to visit Ireland or not. 
They will also be guided on the Government restrictions in place as every country differs In terms of the laws and regulations. 

<h2 align="center"><img src="README-files/responsive_image.png" max-width="50%"></h2>

## USER EXPERIENCE (UX)

Consumers who are contemplating a potential trip away invest time in researching potential destinations through reviews, experiences content blogs and search engines. A holiday is experiential rather than materialistic so it's not an impulse decision in most cases. People want to know they are going to get a unique new experience on their next holiday. There is also a trend in tourism that visitors have a cultural appreication for hidden gems and living like a local. 
I considered all of these factors and trends when designing my website. 

The key goals for Come to Cork are:
 
1. Promote Cork City as a tourist destination.

2. Allow users/potential city break tourists to make an informed decision and include cork as part of their conderation set when thinking of a city break away. 

    ### User Stories

*   As a user I want to see some images of the scenic locations I may visit when arriving in Cork. 
    * This is the reason for the eye catching Hero image with the image slider. This will showcase some high quality photos of cork which will slide every 5 seconds. 

*   As a user I want to skip ahead of the 3second slide timer as I have seen enough of this image.
    * The reason for inserting a button the left and right of the hero image, so the user can interact with the page. 

*   As a user I want to see the main attractions of Cork and what makes it different from the other cities in Ireland. 
    * 	The reason for the “why visit Cork” section which will give a brief description of its history, food culture, famous locations and social life. 

*   As a user I want to see some recommended places to visit as a I don’t know Cork very well, and I want to know some of the locations a local person would go to.
    *   Reason for the tab panel beside the map which gives bar, hotel, restaurant and other tourist recommendations.
    
*   As a user I want be able to plan my trip using a map so I have an idea of where everything Is and I can make itinerary. 
    * Reason for the google map. 

*   As a user I want to know how many cases of Corona Virus there is in Ireland so I know whether it is safe to visit Cork or not.
    * Reason for the Corona Virus Api. 

    ### Wireframes 
I used [Balsamic](https://balsamiq.com/) to build the wireframes. I created mockups for desktop, tablet and mobile viewports so i could have an idea of what my website would look like and a plan i could follow to avoid scope creep.


<details>
<summary>Desktop Wireframes</summary>
<p align="center">
  <img height="350" src="README-files/wireframes/wireframe-hero-image.png" style="max-width:100%;"></a>
</p>
<p align="center">
<img height="350" src="README-files/wireframes/wireframe-why-cork.png" style="max-width:100%;"></a>
</p>
<p align="center">
<img height="350" src="README-files/wireframes/wireframe-locals-guide.png" style="max-width:100%;"></a>
</p>
<p align="center">
<img height="350" src="README-files/wireframes/wireframe-covid.png" style="max-width:100%;"></a>
</p>
</details>

<details>
<summary>Tablet Wireframes</summary>
<p align="center">
  <img height="350" src="README-files/wireframes/wireframe-ipad.png" style="max-width:100%;"></a>
</p>
</details>

<details>
<summary>Mobile Wireframes</summary>
<p align="center">
  <img height="350" src="README-files/wireframes/wireframe-mobile1.png" style="max-width:100%;"></a>
</p>
<p align="center">
  <img height="350" src="README-files/wireframes/wireframe-mobile2.png" style="max-width:100%;"></a>
</p>
</details>

## DESIGN

### Framework
I used <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> to build the framework of the website. Bootstrap was  the main tool frame responsible for making the Come to Cork website responsive. This means the website automatically resizes itself to look good on all devices, be it mobile, tablet, laptop or desktop. 

### Colour Scheme

<b>Red</b> Red is the most imposing and dominate colour on the Come To Cork website. As you can see from my wireframes, i initially planned on using red even more as the main background colour, however i later felt red is a very powerful and imposing colour and too much of it could distract the reader and make it unreadable. Red is the colour associated with county cork so it had to be the main colour of the website. I used a dark red as i felt brighter colours cheapened the brand and website. I feel i got the right combination of attention getting and exciting red paired with a white background and font. 

<b>White</b> As mentioned above, the white was used to give the red a softer feel in places. I wanted to go for a clean look and I also feel it fits well, too much colors could be overpowering and distract the user from the key information 

<b>Charcoal</b> – I used a charcoal background in the ‘Covid 19 Update’ section. The Charcoal section adds a sense of change to the page and also gives a modern feel when paired with the burlywood and softer red coloured font. 

#### List of all the colours used throughout the website: 
* #9D1821 Main dark red used.
* #ff515d85 Lighter slight pink red.
* #030303d6 Dark charcoal.
* #555555 Lighter charcoal. 
* #d5d0d0 Silver.
* #a1720bbb Gold.
* Burlywood.
* Black.
* White.

### Typography 
The “Montserrat” font is the font used for all the headings and the “Lora” font is the font used for the body of the website. Sans serif and serif are set as the fallback font in case for any reason the font isn't being imported into the site correctly.

### Imagery 
Imagery is a reoccurring theme throughout the website. I felt images played a vital role in influencing a users desicion in choosing a holiday destination, and it allows people place themselves in a patricular place without being there. 
The Hero image especially works well in drawing the user in and given the website a very modern feel.

## FEATURES

### HERO IMAGE 
* The Landing page sets the theme for the layout of the entire website. There is an eye catching hero image, which is clean looking. The hero image uses a <a href="https://getbootstrap.com/docs/4.5/components/carousel/" target="_blank">bootstrap carousel</a> to slide every 5 seconds. The user also has the option to skip ahead with a 'next' and 'previous' button.
The hero images include some iconic locations in Cork, like st.Fin Barre's Cathedral, the port of Cork and the Blarney Castle. 

    <details>
    <summary>Mobile Wireframes</summary>
    <p align="center">
    <img height="350" src="README-files/images/screengrab-hero-image.png" style="max-width:100%;"></a>
    </p>
    </details>

    