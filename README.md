# SmartSpend

Managing Finances through receipt upload and automatic addition to your spending total.

## Links
View the [GitHub page](https://endarli.github.io/HackNYU/)!
<br/>
View the project on the [Hackathon Devpost](https://devpost.com/software/smartspend-8ea9lm)!

## Inspiration
As college students, money management is an important skill to develop in our transition to adulthood. Creating an app or website that helps track our spending by reading receipts collected over time can help us manage where we are spending our money. Whether it's spending too much on food or entertainment, we can help redirect our spendings by easily viewing our total amounts in simple interfaces.

## What it does
The tesseract API will read the total from receipts and the UIUX interface will ask the user what category the receipt lies under (food, entertainment, school, etc.). After that, it'll present the total spending in a pie chart and quickly allow users to see where the majority of their money is going towards. As a backup for when the above does not work, users can manually input their items on their receipts. Users can opt to delete all of their data or see a single item with the use of its key.

## How we built it
We built the web browser using React.js and javascript as our main language. We also used GitHub to allow for easy collaboration with each other.

## Challenges we ran into
A large challenge we ran into was combining both the receipt reading program made with tesseract with the UI/UX interface made with React.js. We found it difficult to read the input of a file in React.js or recreate the file itself after uploading and managing it within our JavaScript code. Thus we weren't able to load a sample image of a receipt through the receipt reading program.

## Accomplishments that we're proud of
Even though this was our first Hackathon, we were proud of what we were individually able to create and how much we learned over the weekend. We were able to create the major components that we wanted besides the small mishap where we couldn't connect the two main components of our program.

## What we learned
We learned a lot more about how React.js works and how to equally distribute contributions among the team.

## What's next for SmartSpend
To find a way to connect the programs together to create one functional application if possible. In addition, maybe continue to add financial empowerment applications to it and help others manage their money in a smarter way.

## Built With
css <br/>
html5 <br/>
javascript <br/>
react <br/>
react-hook-form <br/>
recharts <br/>
tesseract <br/>
