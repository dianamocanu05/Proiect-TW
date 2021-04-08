import sqlite3
import os

DB_PATH = os.path.join("../data/mock", "mock-db.sqlite3")


def create_database(db_path=DB_PATH):
    connection = sqlite3.connect(db_path)
    return connection


def write_db(connection, accidents):

    create_stmt = """
            CREATE TABLE accidents ( 
                  id varchar2(150) PRIMARY KEY, 
                  severity varchar2(150), 
                  start_time varchar2(150), 
                  street varchar2(150), 
                  side varchar2(150),
                  city varchar2(150),
                  county varchar2(150),
                  state varchar2(150),
                  temperature integer,
                  visibility integer,
                   weather_condition varchar2(150) ) """
    cursor = connection.cursor()
    cursor.execute("DROP TABLE accidents")
    cursor.execute(create_stmt)

    for accident in accidents:
        insert_stmt = "INSERT INTO accidents VALUES (?,?,?,?,?,?,?,?,?,?,?)"
        cursor.execute(insert_stmt, (accident.id, accident.severity, accident.start_time, accident.street, accident.side,
                       accident.city, accident.county, accident.state, accident.temperature, accident.visibility, accident.weather_condition))
    connection.commit()