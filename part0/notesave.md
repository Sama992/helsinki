sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    activate server
    server-->>browser: HTTP status code 302 found
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi//exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi//exampleapp/main.css
    activate server
    server-->>browser: css file

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "xd", date: "2023-12-06T21:13:09.860Z"},…]

    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

  