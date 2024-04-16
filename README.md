# Izegem Klinkt

## Description

Izegem Klinkt is a captivating musical tour in the heart of Pekkersstad. With over 30 editions, we've been celebrating music, camaraderie, and togetherness, all thanks to the dedicated efforts of passionate volunteers. This website, built using Nuxt 3, serves as the digital hub for Izegem Klinkt, providing essential information about the event, including dates, locations, and line-ups.

## Installation

```bash
# Clone the repository
git clone https://github.com/LukasOlivier/izegem-klinkt-nuxt

# Navigate to the directory
cd izegem-klinkt-nuxt

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment

To deploy the website, run the following command:

```bash
npm run generate
```

This will generate a `.output/public` directory containing the static files for the website. These files can be uploaded to any static hosting provider, such as Netlify or Vercel.

## Editing line-up

The line-up is stored in the `bands.ts` file in the `data` directory. To edit the line-up, simply modify the contents of this file. Each band is represented as an object with the following properties:

- `lookupName`: A unique identifier for the band, used for the url. This should be a lowercase, hyphen-separated version of the band name.

- `location`: The location where the band will be performing.

- `time`: The time at which the band will be performing.

- `bandPhoto`: The path to the band's photo, stored in the `public/bands` directory. Please use .webp format for optimal performance.

- `bandName`: The name of the band.

- `website` (optional): The website of the band.

- `video` (optional): The path to a video of the band. This can be a YouTube or Facebook link.

- `description`: A brief description of the band.

## Contributing

If you would like to make any changes to the line-up or have any questions, please contact Lukas Olivier at olivier.lukas2003@gmail.com or Bjorn Olivier at bjorn.olivier@telenet.be. Any modifications to the line-up or any other part of the project should be done through a pull request.

## License

The content of this project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
