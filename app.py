# gitbash/terminal : python -m flask run

from flask import Flask, render_template
import pandas as pd

app = Flask(__name__, template_folder='./templates')

@app.route('/')
def home():
    return render_template('index.html')



@app.route('/dashboard')   
def dashboard():
    df = pd.read_csv('./data/topics_count_list.csv')
    # print("DF with stats")
    # print(df.to_json())

    return render_template("dashboard.html", json_data=df.to_json())


@app.route('/wordcloud')
def wordcloud():
    # df = pd.read_csv('./data/arxiv_condensed_data.csv')


    return render_template("wordcloud.html")




@app.route('/bargraph')  
def bargraph():
    # df = pd.read_csv('./data/topics_count_list.csv')


    return render_template("bargraph.html")
