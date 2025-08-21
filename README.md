##  ⏱️ node-pro(Timestamp Generator) 

A simple Node.js + Express project that generates the current timestamp, saves it into a text file, and exposes an API endpoint to retrieve it.  

---

## 🚀 Features  
- Generates a timestamp using Node.js `Date` object  
- Creates a `.txt` file with timestamp inside the `/times` folder  
- Exposes an API endpoint (`/`) to return the timestamp as JSON  
- Lightweight and easy to set up with Express  

---

## 📂 Project Structure  
node-pro/
│── times/ # Folder where timestamp files are stored
│── index.js # Main Express server file
│── package.json # Dependencies and scripts

---

## 📥 Clone Repository  
```bash
git clone https://github.com/Elanthiran/node-pro.git
cd node-pro
```
---

▶️ Usage

1. Run the server using node index.js.

2. Open your browser and go to http://localhost:4000.

3. The page will display the current timestamp in JSON format.

4. At the same time, a text file will be created inside the times folder.

5. The text file name will be the current date (for example: 2025-08-21.txt).

6. Inside the file, you will find the timestamp value.


---

## 🛠️ Tech Stack
- Node.js – Runtime environment

- Express.js – Web framework

- body-parser – Request body parsing

- fs (File System) – File handling

---

## 🌟 Future Improvements
- Add an endpoint to return all saved timestamps

- Store timestamps in MongoDB / MySQL instead of .txt

- Add a frontend UI to display generated timestamps

- Implement user-defined filename support

---

## 🤝 Contributing
Contributions are welcome!

- Fork the repo

- Create a new branch (feature-name)

- Commit changes

- Open a Pull Request

---

## 📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it with attribution.
