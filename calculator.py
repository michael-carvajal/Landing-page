import tkinter as tk
import webview

# Create the GUI window
window = webview.create_window("My HTML Site", "http://127.0.0.1:5501/programming.html")

# Run the GUI
webview.start(debug=True)


# Create the main window
window = tk.Tk()
window.title("Calculator")

# Create the input fields
input_field = tk.Entry(window, width=35, font=("Arial", 20))
input_field.grid(row=0, column=0, columnspan=3)

# Create the buttons
button_7 = tk.Button(window, text="7", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "7"))
button_7.grid(row=1, column=0)

button_8 = tk.Button(window, text="8", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "8"))
button_8.grid(row=1, column=1)

button_9 = tk.Button(window, text="9", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "9"))
button_9.grid(row=1, column=2)

button_divide = tk.Button(window, text="/", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "/"))
button_divide.grid(row=1, column=3)

button_4 = tk.Button(window, text="4", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "4"))
button_4.grid(row=2, column=0)

button_5 = tk.Button(window, text="5", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "5"))
button_5.grid(row=2, column=1)

button_6 = tk.Button(window, text="6", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "6"))
button_6.grid(row=2, column=2)

button_multiply = tk.Button(window, text="*", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "*"))
button_multiply.grid(row=2, column=3)

button_1 = tk.Button(window, text="1", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "1"))
button_1.grid(row=3, column=0)

button_2 = tk.Button(window, text="2", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "2"))
button_2.grid(row=3, column=1)

button_3 = tk.Button(window, text="3", font=("Arial", 20), command=lambda: input_field.insert(tk.END, "3"))
button_3.grid(row=3, column=2)

button_subtract = tk.Button(window)
button_equal = tk.Button(window, text="=", font=("Arial", 20), command=lambda: input_field.insert(tk.END, eval(input_field.get())))
button_equal.grid(row=3, column=3)

def compute_result(event):
    # Bind the "Return" key to the compute_result() function
  input_field.bind("<Return>", lambda event: compute_result(event))

  input_text = input_field.get()
  try:
    # Evaluate the input as a Python expression and store the result
    result = eval(input_text)
  except Exception:
    # If there is an error evaluating the expression, display an error message
    result = "Error"
  # Clear the input field and display the result
  input_field.delete(0, tk.END)
  input_field.insert(0, result)

button_equal = tk.Button(window, text="=", font=("Arial", 20), command=compute_result)
button_equal.grid(row=3, column=3)

def add():
  # Get the current input and append a "+" character
  input_field.insert(tk.END, "+")

def subtract():
  # Get the current input and append a "-" character
  input_field.insert(tk.END, "-")

button_add = tk.Button(window, text="+", font=("Arial", 20), command=add)
button_add.grid(row=4, column=0)

button_subtract = tk.Button(window, text="-", font=("Arial", 20), command=subtract)
button_subtract.grid(row=4, column=1)


def clear():
  # Clear the input field
  input_field.delete(0, tk.END)

button_clear = tk.Button(window, text="Clear", font=("Arial", 20), command=clear)
button_clear.grid(row=4, column=2)
# Bind the "Return" key to the compute_result() function
input_field.bind("<Return>", compute_result)
