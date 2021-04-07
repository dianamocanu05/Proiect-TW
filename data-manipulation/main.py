import csv


class AccidentInstance:
    def __init__(self, id, severity, start_time, street, side, city, county, state, temperature, visibility,
                 weather_condition):
        self.id = id
        self.severity = severity
        self.start_time = start_time
        self.street = street
        self.side = side
        self.city = city
        self.county = county
        self.state = state
        self.temperature = temperature
        self.visibility = visibility
        self.weather_condition = weather_condition

    def __iter__(self):
        return iter(
            [self.id, self.severity, self.start_time, self.street, self.side, self.city, self.county, self.state,
             self.temperature, self.visibility, self.weather_condition])


class MockData:
    accidents = []
    header = ["ID", "Severity", "Start_Time", "Street", "Side", "City", "County", "State", "Temperature(F)",
              "Visibility(mi)", "Weather_Condition"]

    def __init__(self, input_path, output_path, number_of_entries):
        self.input_path = input_path
        self.output_path = output_path
        self.number_of_entries = number_of_entries

    def get_data(self):
        idx = 0
        with open(self.input_path) as csv_file:
            reader = csv.DictReader(csv_file)
            for row in reader:
                idx += 1
                if 1 <= idx <= self.number_of_entries:
                    instance = AccidentInstance(row["ID"], row["Severity"], row["Start_Time"], row["Street"],
                                                row["Side"], row["City"], row["County"], row["State"],
                                                row["Temperature(F)"], row["Visibility(mi)"],
                                                row["Weather_Condition"])
                    self.accidents.append(instance)
                else:
                    break

    def write_data(self):
        with open(self.output_path, mode='w', newline = '') as out_file:
            writer = csv.writer(out_file)
            writer.writerow(self.header)
            writer.writerows(list(accident) for accident in self.accidents)


file_path = r"..\data\complete\US_Accidents_Dec20.csv"
mock_data_path = r"..\data\mock\mock_data.csv"
mockData = MockData(file_path, mock_data_path, 100)
mockData.get_data()
mockData.write_data()
