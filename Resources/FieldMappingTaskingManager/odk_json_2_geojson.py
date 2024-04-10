import json


def convert_to_geojson(input_file, output_file):

    with open(input_file) as f:
        data = json.load(f)

    geojson = {"type": "FeatureCollection", "features": []}

    for feature in data:

        geometry = feature["warmup"]

        properties = {}

        flatten_properties(feature, properties)

        geojson["features"].append(
            {"type": "Feature", "geometry": geometry, "properties": properties}
        )

    with open(output_file, "w") as f:
        json.dump(geojson, f)


def flatten_properties(data, target):
    for k, v in data.items():
        if isinstance(v, dict):
            flatten_properties(v, target)
        else:
            target[k] = v


if __name__ == "__main__":

    input_file = "submission_data.json"
    output_file = "output.geojson"

    convert_to_geojson(input_file, output_file)
